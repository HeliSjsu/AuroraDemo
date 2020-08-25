const nodemailer = require('nodemailer');
let transporter  =  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shahhelly2014@gmail.com',
      pass: 'Fangirl1@'
    }
  });

  module.exports = transporter ;