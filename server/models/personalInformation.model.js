const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalInformation = new Schema({
  profilePicture: String,
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  birthday: { type: Date, required: true },
  profession: String,
  email: { type: String, required: true },
  phoneNumber: String,
  address: String,
});

module.exports = mongoose.model('PersonalInformation', personalInformation);

