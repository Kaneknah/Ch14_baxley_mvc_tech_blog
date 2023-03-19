const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");


//route for rendering login.
router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}
	res.render("login");
});

//route for rendering signup
router.get("/signup", (req, res) => {
	res.render("signup");
});

//route to find all posts
router.get("/", (req, res) => {
	Post.findAll({
		attributes: ["id", "title", "content", "created_at"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
    //code for rendering posts
		.then((dbPostData) => {
			const posts = dbPostData.map((post) => post.get({ plain: true }));
			res.render("homepage", {
				posts,
				logged_in: req.session.logged_in,
				username: req.session.username,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});



//route for finding one post

//code for rendering posts

