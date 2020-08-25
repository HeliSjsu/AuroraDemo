//import the require dependencies
var express = require('express');
var app = express();
var path=require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
const transporter = require('./transporter');
const serverconfig = require('./serverConfig');
app.set('view engine', 'ejs');
app.use(cors({ origin: serverconfig, credentials: true }));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(bodyParser.json());

//Allow Access Control
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', serverconfig);
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

var sess;

//Route to handle Post Request Call
app.post('/requestAppointment', function (req, res) {
  console.log("Hello", req);
  let errorMsg;
  let htmlsubject = '<html><head><style> table, th, td { border:1px solid black; border-collapse: collapse; text-align: left;padding: 10px;}</style></head><body><table> <tr><th> Current patient</th><td>'+req.body.patienttype+'</td></tr> <tr><th>First Name</th><td>'+req.body.fname+'</td></tr><tr><th>Last Name</th><td>'+req.body.lname+'</td></tr><tr><th>Email Id</th><td>'+req.body.emailId+'</td></tr><tr><th>Phone No</th><td>'+req.body.phoneNo+'</td></tr><tr><th>Birth Date</th><td>'+req.body.bday+'</td></tr><tr><th>Best Time to Call</th><td>'+req.body.bestTime+'</td></tr><tr><th> Message </th><td>'+req.body.msg+'</td></tr></table></body></html>';
  var mailOptions = {
    from: 'shahhelly2014@gmail.com',
    to: req.body.emailId,
    subject: 'Dentist Appointment Requested.',
    text: 'This is my text',
    html :htmlsubject
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' );
      res.status(200).send({ "msg": "Successful" });
    }
  });
 
});



//start your server on port 3001
app.listen(3001);
console.log("Server Listening on port 3001");

module.exports = app;