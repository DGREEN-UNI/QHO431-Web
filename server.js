const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// SQLite DB connection
const db = new sqlite3.Database("contactform.db", (err) => {
  if (err) {
    console.error("Database opening error: " + err.message);
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS contactform (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT
  )
`);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contactform", (req, res) => {
  res.render("contactform", { success: false });
});

app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Form submitted:", name, email, message); // ✅ Log inputs

  db.run(
    `INSERT INTO contactform (name, email, message) VALUES (?, ?, ?)`,
    [name, email, message],
    function (err) {
      if (err) {
        console.error("Insert error: " + err.message);
        return res.render("contactform", { success: false });
      }

      console.log(`✅ Saved: ${name}, ${email}`);
      res.render("contactform", { success: true });
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
