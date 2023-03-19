const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models");

const blogData = require("./blogData.json");
const commentData = require("./commentData.json");
const userData = require("./userData.json");

//Setting up the SeedDatabase functions
const seedDatabase = async () => {
	await sequelize.sync({ force: true });

    //bulk create for users
	const users = await User.bulkCreate(userData, {
		individualHooks: true,
		returning: true,
	});

    //bulk create for posts
    const posts = await Post.bulkCreate(postData, {
			individualHooks: true,
			returning: true,
		});
//bulk create for comments
	const comments = await Comment.bulkCreate(commentData, {
		returning: true,
	});

	process.exit(0);
};

seedDatabase();
