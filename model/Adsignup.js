const mongoose =require("mongoose")

let adl=mongoose.Schema;
const adminSchema = new adl({
    FirstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String,

    
  });
  
  var signupmodel =mongoose.model("admin",adminSchema)
  module.exports =signupmodel;