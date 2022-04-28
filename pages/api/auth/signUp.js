import dbConnect from '../../../mongo/dbConnect';
import { hash } from 'bcryptjs';
import User from '../../../mongo/models/users';

async function handler(req, res) {
    const { method } = req;
    await dbConnect();
    if (method === 'POST') {
        const { email, password, fName, lName, countryValue, zipCode  } = req.body;
        console.log(email + ' is trying to Sign Up')
        if (!email || !email.includes('@') || !password) {
            res.status(422).json({ message: 'Invalid Data' });
            console.log('Invalid Credentials')
            return;
        }
        const checkExisting = await User.findOne({email: email});
        if (checkExisting) {
           return res.status(422).json({ message: 'Email already exists' });
        }
        const hashedPass = await hash(password, 12)
        const status = new User ({
            email: email,
            password: hashedPass,
            fName:fName,
            lName: lName,
            countryValue: countryValue,
            zipCode: zipCode,
        })
        .save(function(err){
            if(err) console.log(err);
        })
        res.status(201).json({ message: 'User created', ...status });
    } else {
        res.status(500).json({ message: 'Route not valid' });
    }
}

export default handler;
