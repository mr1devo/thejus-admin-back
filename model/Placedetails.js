const mongoose =require("mongoose")

let pd=mongoose.Schema;
const place = new pd(
    {
        placename:String,
        tsee:String,
        location:String,
        desc:String,
        latitude:String,
        longitude:String,
        placephoto:{
            contentType:String,
            data : Buffer,
           },
          
       
        
        }
);

var placemodel =mongoose.model("place",place);
module.exports=placemodel;