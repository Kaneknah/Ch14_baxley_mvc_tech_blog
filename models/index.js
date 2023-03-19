const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");


//Post models setup
Post.belongsTo(User, {
	foreignKey: "user_id",
});
Post.hasMany(Comment, {
	foreignKey: "post_id",
});
//Comments models setup
Comment.belongsTo(User, {
	through: Post,
	foreignKey: "user_id",
});




module.exports = { User, Post, Comment };
