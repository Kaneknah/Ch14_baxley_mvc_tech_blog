const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const postData = require("./postSeed.json");
const commentData = require("./commentSeed.json");
const userData = require("./userSeed.json");

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
