var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});




// router.get('/:id', function(req, res, next) {
//   console.log("server got hit");
//   console.log(req.params.id);


//   req.getConnection(function(err, connection){
//     if(err) return next(err);
//     connection.query('SELECT id, name, age FROM users WHERE id='+ req.params.id +';', function(err, rows){
//       if(err) console.log('Error selecting: %s ', err);
//       console.log(rows)
//       res.json(rows);
//     });
//   })
// })

module.exports = router;
