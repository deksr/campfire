var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // connection.query('SELECT * FROM people', function(err, rows, fields) {
  // connection.end();
  //   if (!err)
  //     console.log('The solution is: ', rows);
  //   else
  //     console.log('Error while performing Query.');
  // });
  //   console.log(rows)
  //   console.log(fields)
  res.render('index', { title: 'Express' });

});

module.exports = router;
