const app = require('express').Router()
const signupmodel = require('../model/Adsignup');


 // signupRoute.js
app.get('/adnew', (request, response) => {
  new signupmodel(request.body).save();
  response.send("Record saved Successfully");
});

app.post('/adminnew', (request, response) => {
      new signupmodel(request.body).save();
      response.send("Record saved Successfully");
});

app.post('/adminlogin', async (request, response) => {
  const { username, password } = request.body;

  try {
    const admin = await signupmodel.findOne({ username });

    if (!admin || admin.password !== password) {
      return response.status(401).json({ success: false, message: 'Invalid Username or Password' });
    }

    response.status(200).json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    response.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = app