const mysql = require("mysql2");

//testing database
const db = mysql.createPool({
	host: `${process.env.DB_HOST}`,
	user: `${process.env.DB_USER}`,
	password: `${process.env.DB_PASSWORD}`,
	database: `${process.env.DB_NAME}`,
	port: `${process.env.DB_PORT}`,
	connectionLimit: 10,
});

// db.connect((err) => {
// 	if (err) throw err;
// 	console.log("DB Connection!");
// });

module.exports = db;

// module.exports = db.promise()
