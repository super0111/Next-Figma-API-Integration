import mongoose, { ConnectionStates } from 'mongoose';
const Schema = mongoose.Schema;

const users = new Schema({
    email: {
		type: String,
        required: true,
	},
	password: {
		type: String,
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

mongoose.models = {};

const User = mongoose.model('Users', users);

export default User;
