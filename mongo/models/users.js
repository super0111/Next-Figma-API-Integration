import mongoose, { ConnectionStates } from 'mongoose';
const Schema = mongoose.Schema;

const users = new Schema({
    email: {
		type: String, // Handle Required on Frontend for User Accounts
        required: true,
	},
	password: {
		type: String, // Handle Required on Frontend for User Accounts
        required: true,
	},
	fName: {
		type: String,
		required: true
	},
	lName: {
		type: String,
		required: true
	},
	countryValue: {
		type: String,
	},
	zipCode: {
		type: String,
	},
});

mongoose.models = {}; //Prevents overwrite warning

const User = mongoose.model('Users', users);

export default User;
