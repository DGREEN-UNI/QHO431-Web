const express = require("express")
const path = require("path")

const port = 5000

const app = express();

// setup public folder
app.use(express.static(path.join(__dirname, 'public')));

// Setup views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/", (req, res) => res.render("index"))

app.listen(port, () => console.log(`Listening on port: ${port}`))
