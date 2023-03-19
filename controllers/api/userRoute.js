const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

//route for finding all users
router.get("/", (req, res) => {
	User.findAll({});
});

//route for finding one user by id
router.get("/:id", (req, res) => {
	User.findOne({});
});

//route for creating a user
router.post("/", (req, res) => {
	User.create({});
});

//route for logging in
router.post("/login", (req, res) => {
	User.findAll({});
});

//route for logging out
router.post("/logout", (req, res) => {
	User.findAll({});
});

module.exports = router;
