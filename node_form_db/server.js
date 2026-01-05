const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = 3000;

// Form data read
app.use(express.urlencoded({ extended: true }));

// Static HTML
app.use(express.static(path.join(__dirname, "public")));

// ============================
// DATABASE SETUP
// ============================
const db = new sqlite3.Database("database.db");

// Table create (if not exists)
db.run(`
    CREATE TABLE IF NOT EXISTS records (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        value1 TEXT,
        value2 TEXT,
        time TEXT
    )
`);

// ============================
// POST ROUTE
// ============================
app.post("/save", (req, res) => {
    const { value1, value2 } = req.body;
    const time = new Date().toLocaleString();

    const query = `
        INSERT INTO records (value1, value2, time)
        VALUES (?, ?, ?)
    `;

    db.run(query, [value1, value2, time], (err) => {
        if (err) {
            return res.send("❌ Database Error");
        }
        res.send("✅ Data Saved to Database <br><a href='/'>Go Back</a>");
    });
});


// GET route to show all records
app.get("/records", (req, res) => {
    const query = "SELECT * FROM records";

    db.all(query, [], (err, rows) => {
        if (err) {
            return res.send("❌ Database Error");
        }

        // Simple HTML page with table
        let html = "<h2>All Records</h2>";
        html += "<table border='1' cellpadding='5'><tr><th>ID</th><th>Value1</th><th>Value2</th><th>Time</th></tr>";

        rows.forEach(row => {
            html += `<tr>
                        <td>${row.id}</td>
                        <td>${row.value1}</td>
                        <td>${row.value2}</td>
                        <td>${row.time}</td>
                     </tr>`;
        });

        html += "</table><br><a href='/'>Go Back</a>";
        res.send(html);
    });
});









// ============================
// SERVER START
// ============================
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
