const express = require("express");;
const path = require("path");
const cors = require("cors");
const app = express()
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.use("/", require("./routes/index.js"));
app.use("/new", require("./routes/index.js"));
app.all("*", (req, res) => {
	res.sendStatus(404);
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
