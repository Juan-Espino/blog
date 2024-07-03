const mysql = require("mysql2");

//testing database
const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "5686",
	database: "blog",
	connectionLimit: 10,
});

// db.connect((err) => {
// 	if (err) throw err;
// 	console.log("DB Connection!");
// });

module.exports = db;

// module.exports = db.promise()
