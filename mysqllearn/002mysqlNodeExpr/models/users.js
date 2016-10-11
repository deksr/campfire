// var db = require('../db.js')




// exports.create = function(userId, text, done) {
//   var values = [userId, text, new Date().toISOString()]
  
//   db.get().query('INSERT INTO comments (user_id, text, date) VALUES(?, ?, ?)', values, function(err, result) {
//     if (err) return done(err)
//     done(null, result.insertId)
//   })
// }



// exports.getAll = function(done) {
//   db.get().query('SELECT * FROM people', function (err, rows) {
//     // if (err) return done(err)
//     // done(null, rows)
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
//   })
// }

// exports.getAllByUser = function(userId, done) {
//   db.get().query('SELECT * FROM comments WHERE user_id = ?', userId, function (err, rows) {
//     if (err) return done(err)
//     done(null, rows)
//   })
// }




// TWO DIFFERENT VERSIONS  OF CRUD ABOVE AND BELOW : 

// exports.list = function(req, res){
//   req.getConnection(function(err,connection){
       
//      connection.query('SELECT * FROM people',function(err,rows)     {
            
//       if(err)
//         console.log("Error Selecting : %s ",err );
//         // res.render('customers',{page_title:"Customers - Node.js",data:rows});                     
//       });
       
//     });
  
// };
// exports.add = function(req, res){
//   res.render('add_customer',{page_title:"Add Customers-Node.js"});
// };
// exports.edit = function(req, res){
    
//   var id = req.params.id;
    
//   req.getConnection(function(err,connection){
       
//      connection.query('SELECT * FROM customer WHERE id = ?',[id],function(err,rows)
//         {
            
//             if(err)
//                 console.log("Error Selecting : %s ",err );
     
//             // res.render('edit_customer',{page_title:"Edit Customers - Node.js",data:rows});
                           
//          });
                 
//     }); 
// };
// /*Save the customer*/
// exports.save = function(req,res){
    
//     var input = JSON.parse(JSON.stringify(req.body));
    
//     req.getConnection(function (err, connection) {
        
//         var data = {
            
//             name    : input.name,
//             address : input.address,
//             email   : input.email,
//             phone   : input.phone 
        
//         };
        
//         var query = connection.query("INSERT INTO customer set ? ",data, function(err, rows)
//         {
  
//           if (err)
//               console.log("Error inserting : %s ",err );
         
//           // res.redirect('/customers');
          
//         });
        
//        // console.log(query.sql); get raw query
    
//     });
// };/*Save edited customer*/
// exports.save_edit = function(req,res){
    
//     var input = JSON.parse(JSON.stringify(req.body));
//     var id = req.params.id;
    
//     req.getConnection(function (err, connection) {
        
//         var data = {
            
//             name    : input.name,
//             address : input.address,
//             email   : input.email,
//             phone   : input.phone 
        
//         };
        
//         connection.query("UPDATE customer set ? WHERE id = ? ",[data,id], function(err, rows)
//         {
  
//           if (err)
//               console.log("Error Updating : %s ",err );
         
//           // res.redirect('/customers');
          
//         });
    
//     });
// };

// exports.delete_customer = function(req,res){
          
//      var id = req.params.id;
    
//      req.getConnection(function (err, connection) {
        
//         connection.query("DELETE FROM customer  WHERE id = ? ",[id], function(err, rows)
//         {
            
//              if(err)
//                  console.log("Error deleting : %s ",err );
            
//              // res.redirect('/customers');
             
//         });
        
//      });
// };