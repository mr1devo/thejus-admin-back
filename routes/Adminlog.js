const app = require('express').Router()
const loginmodel = require('../model/Adlog');


//LOGIN


app.post ('/adlogin', async (request, response) => {
    const { email, password } = request.body;
    console.log(request.body)
    try {
      const admin = await loginmodel.findOne({ email, password });
    
      if (admin) {
        response.json({ success: true, message: 'Login successful' });
      }
       else {
        response.json({ success: false, message: 'Invalid Password and email' });
      }
    } catch (error) {
      response.status(500).json({ success: false, message: 'Error during login' });
    }
  });
  
//login retrieving

app.get('/adLog',async(request,response)=>{
  var addata = await loginmodel.find();
  response.send(addata)
})


  module.exports = app