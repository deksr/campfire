var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');
var pyshell = new PythonShell('python-folder/scriptme.py', { mode: 'json '});



/* GET home page. */
router.get('/', function(req, res, next) {

	pyshell.receive({ command: "do_stuff", args: [1, 2, 3] });
	
  res.render('index', { title: 'Express' });

  ////using python
  // pyshell.send({ command: "do_stuff", args: [1, 2, 3] });
	// PythonShell.run('python-folder/scriptme.py', function (err) {
	//   if (err) throw err;
	//   console.log('finished');
	// });


});

module.exports = router;
