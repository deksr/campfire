var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/pluto', handleSayHello); 

function handleSayHello(req, res) {
	console.log(req.body.from)
	var transporter = nodemailer.createTransport('smtps://username%40gmail.com:password@smtp.gmail.com');


    var mailOptions = {
    from: req.body.from, // sender address(but this is not working)
    to: 'username@gmail.com', // list of receivers
    subject: req.body.from, // Subject line but use from instead
    text: req.body.text//, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };
   
   transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        // res.json({yo: 'error'});
    }else{
        console.log('Message sent: ' + info.response);
        // res.json({yo: info.response});
      };
     });

   res.redirect('/');

}

module.exports = router;
