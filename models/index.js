const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//Post models setup
Post.belongsTo(User, {
	foreignKey: "user_id",
	onDelete: "CASCADE",
});
Post.hasMany(Comment, {
	foreignKey: "post_id",
	onDelete: "CASCADE",
});
//Comments models setup
Comment.belongsTo(User, {
	through: Post,
	foreignKey: "user_id",
});

module.exports = { User, Post, Comment };
