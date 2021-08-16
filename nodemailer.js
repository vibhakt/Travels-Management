
var http=require('http');

var nodemailer=require('nodemailer');
  http.createServer(function(req,res){
  res.write( "The package has been sucessfully confirmed");
var transporter=nodemailer.createTransport({
	service:'gmail',
	auth:{
		user:'karthik.ps.213@gmail.com',
		pass:'karthikps12'
	}
});

var mailOptions={
  from:'karthik.ps.213@gmail.com',
  to:'legendaryknights19@gmail.com',
 subject:'Regarding the tour package booked',
 text:'Ur selected package is "packageid and name" and is dated on "date" is sucessfully booked'
};
  transporter.sendMail(mailOptions,function(err,data){
  if(err)  {
  	console.log("not sent",err);
  }
  else
  {
  console.log("sent");
  }

  });
res.end();
}).listen(4000);