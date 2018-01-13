 const mongoose = require('mongoose')

 module.exports = mongoose.model('User', mongoose.Schema({
   firstName: {
     type: String,
     required: true,
     maxlength: 16
   },
   lastName: {
     type: String,
     required: true,
     maxlength: 16
   },
   username: {
     type: String,
     required: true,
     maxlength: 16
   },
   mail: {
     type: String,
     required: true,
     unique: true,
     lowercase: true,
     maxlength: 30
   },
   password: {
     type: String,
     required: true,
     maxlength: 200
   },
   bio: {
     type: String,
     default: null,
     maxlength: 150
   },
   gender: {
     type: String,
     enum: ['male', 'female', null],
     default: null
   }
 }))
