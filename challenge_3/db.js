const mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'rootpass',
	database: 'checkout',
	// port: 3307
})

db.connect();

module.exports = db;



// db.query('INSERT INTO user (name) VALUE ("uma"); ',
// 	(err, data) => {
// 		console.log(err, data)
// 	});



// db.query('SELECT * FROM user;',
// (err, data) => {
// 	console.log(err, data)
// });

