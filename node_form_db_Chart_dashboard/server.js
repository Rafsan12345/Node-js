const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// SQLite Database
const db = new sqlite3.Database("database.db");

// ------------------------
// POST Form save (existing)
app.post("/save", (req, res) => {
    const { value1, value2 } = req.body;
    const time = new Date().toLocaleString();

    db.run("INSERT INTO records (value1, value2, time) VALUES (?, ?, ?)", [value1, value2, time], err => {
        if(err) return res.send("❌ Database Error");
        res.send("✅ Data Saved <br><a href='/'>Go Back</a>");
    });
});

// ------------------------
// API route for dashboard
app.get("/api/records", (req, res) => {
    db.all("SELECT * FROM records ORDER BY id ASC", [], (err, rows) => {
        if(err) return res.status(500).json({error: "Database error"});
        res.json(rows);
    });
});

// ------------------------
// Dashboard page
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
