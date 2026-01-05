const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const db = new sqlite3.Database("database.db");

// create table
db.run(`
CREATE TABLE IF NOT EXISTS records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    value1 TEXT,
    value2 TEXT,
    time TEXT
)`);

// home page (form)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// save form data
app.post("/save", (req, res) => {
    const { value1, value2 } = req.body;
    const time = new Date().toLocaleString();

    db.run(
        "INSERT INTO records (value1, value2, time) VALUES (?, ?, ?)",
        [value1, value2, time]
    );

    // res.redirect("dashboard");
    res.send("✅ Data Saved to Database <br><a href='/'>Go Back</a>");
});

// dashboard page
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

// API data
app.get("/api/data", (req, res) => {
    db.all("SELECT * FROM records ORDER BY id ASC", (err, rows) => {
        res.json(rows);
    });
});

// delete row
app.delete("/delete/:id", (req, res) => {
    db.run("DELETE FROM records WHERE id = ?", [req.params.id], () => {
        res.json({ success: true });
    });
});

app.listen(PORT, () => {
    console.log(`Server running → http://localhost:${PORT}`);
});
