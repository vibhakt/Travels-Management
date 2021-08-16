var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karthikps681@gmail.com',
    pass: 'Karthikps12#'
  }
});

var mailOptions = {
  from: 'karthikps681@gmail.com',
  to: 'karthik.ps.213@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});