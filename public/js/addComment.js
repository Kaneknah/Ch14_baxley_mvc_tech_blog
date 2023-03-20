//route for finding one post
router.get("/post/:id", (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "content", "title", "created_at"],
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
