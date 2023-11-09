const express = require("express");
const router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

router.get("/", (req, res) => {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
	res.render("form", { title: "Mini Messageboard" });
});

router.get("*", (req, res) => {
	res.render("error");
});

router.post("/new", (req, res) => {
	try {
		messages.push({
			text: req.body.messageText,
			user: req.body.userName,
			added: new Date(),
		});
	} catch (e) {
		console.log(e.message);
		res.send(e.message);
	}
	res.redirect("/");
});

module.exports = router;
