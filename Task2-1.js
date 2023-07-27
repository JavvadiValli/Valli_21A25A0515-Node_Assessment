var mysql=require('mysql');
var connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"mysql123",
    database:'student',
});
connection.connect(function(err){
    //if(err) throw err;
    console.log("Database created");
    
});