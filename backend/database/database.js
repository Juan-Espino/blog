const mysql = require("mysql2");

const pool = mysql
	.createPool({
		host: "localhost",
		user: "root",
		password: "5686",
		database: "blog",
	})
	.promise();

const result = await pool.query("SELECT * FROM articles");
console.log(result);
