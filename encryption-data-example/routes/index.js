var express = require('express');
var router = express.Router();
var CryptoJS = require("crypto-js");




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.post('/pluto', decrypter); 

function decrypter(req, res) {
	console.log(req.body.messagesend);
	var gotEncryptedmessage = req.body.messagesend;
	var gotsecretkey = req.body.thesecret

	var decrypted = CryptoJS.AES.decrypt(gotEncryptedmessage, gotsecretkey).toString(CryptoJS.enc.Utf8);

  console.log(decrypted)

   res.redirect('/');

}

module.exports = router;
