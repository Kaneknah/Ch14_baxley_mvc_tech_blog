const Sequelize = require("sequelize");
require("dotenv").config();
//sets up the  connector for Sequelize and the process.envs for name, user and password.
let sequelize;

if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD,
		{
			host: "localhost",
			dialect: "mysql",
			password: "Superman1!",
			port: 3306,
		}
	);
}

module.exports = sequelize;
