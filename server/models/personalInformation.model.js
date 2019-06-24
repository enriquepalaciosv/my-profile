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
  skills: Array,  // example  { name: "VueJs", value: 40 }
  languages: Array, // example  { name: "English", value: 75 }
  workExperience: Array, // { title: "Frontend Developer / Struck - NicaSource",dateRange: "Apr 2019 - current", description: "Vue.js, Ruby On Rails 3 and AngularJS websites development."}
  education: Array // { title: "Android ATC / www.androidatc.com", dateRange: "August 25, 2018", description: "AND-801	- Android Certified Application Developer v8"}
});

module.exports = mongoose.model('PersonalInformation', personalInformation);

