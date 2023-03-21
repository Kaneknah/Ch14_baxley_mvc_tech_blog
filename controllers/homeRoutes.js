const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

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

//route for rendering dashboard
router.get("/dashboard", (req, res) => {
	res.render("dashboard");
});
//route to find all posts
router.get("/", (req, res) => {
	Post.findAll({
		attributes: ["id", "title", "body", "created_at"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_body", "post_id", "user_id", "created_at"],
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

//route for finding a single post for render
router.get("/post/:id", (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "title", "body", "created_at"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_body", "post_id", "user_id", "created_at"],
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
			if (!dbPostData) {
				res.status(404).json({ message: "There is not post that has this ID" });
				return;
			}
			const post = dbPostData.get({ plain: true });
			res.render("single-post", {
				post,
				logged_in: req.session.logged_in,
				username: req.session.username,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
