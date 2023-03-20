const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");
//Might not be needed
//route for finding all comments.
// router.get("/", (req, res) => {
// 	Comment.findAll({})
// 		.then((commentData) => res.json(commentData))
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });
// Might not be needed
// //route for finding one comments.
// router.get("/:id", (req, res) => {
// 	Comment.findOne({
// 		where: {
// 			id: req.params.id,
// 		},
// 	})
// 		.then((commentData) => res.json(commentData))
// 		.catch((err) => {
// 			console.log(err);
// 			res.status(500).json(err);
// 		});
// });

//route for creating a comment.
router.post("/", async (req, res) => {
	try {
		const newComment = await Comment.create({
			...req.body,
			user_id: req.session.user_id,
		});
		res.json(newComment);
	} catch (err) {
		res.status(500).json(err);
	}
});

//route for deleting comment
router.delete("/:id", withAuth, async (req, res) => {
	try {
		const commentData = await Comment.destroy({
			where: {
				id: req.params.id,
				user_id: req.session.user_id,
			},
		});
		if (!commentData) {
			res.status(404).json({ message: "No Comment with this ID found" });
			return;
		}
		res.status(200).json(commentData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
