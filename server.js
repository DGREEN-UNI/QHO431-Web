const express = require("express");
const path = require("path");
const db = require("./db.js");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

db.run(`
  CREATE TABLE IF NOT EXISTS contactform (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT
  )
`);

/**
 * Routes
 */
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/course-listing", (req, res) => {
  res.render("course-listing");
});

app.get("/instructor-profiles", (req, res) => {
  res.render("instructor-profiles");
});

app.get("/contact-form", (req, res) => {
  res.render("contact-form");
});

app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO contactform (name, email, message) VALUES (?, ?, ?)`,
      [name, email, message],
      function (err) {
        if (err) {
          console.error("Insert error: " + err.message);
          return reject(err);
        }

        console.log(`✅ Saved: ${name}, ${email}`);
        resolve({ id: this.lastID, name, email, message });
      }
    );
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
