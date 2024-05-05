const mongoose =require("mongoose")

let adl=mongoose.Schema;
const AdloginSchema = new adl({
    Email: String,
    Password: String,
    
  });
  
  var loginmodel =mongoose.model("adLogin",AdloginSchema)
  module.exports =loginmodel;