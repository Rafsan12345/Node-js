const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Form data read
app.use(express.urlencoded({ extended: true }));

// Static HTML
app.use(express.static(path.join(__dirname, "public")));

// POST route
app.post("/save", (req, res) => {
    const { value1, value2 } = req.body;

    const time = new Date().toLocaleString();

    const data = `Time: ${time}, Value1: ${value1}, Value2: ${value2}\n`;

    fs.appendFileSync("data/data.txt", data);

    res.send("✅ Data Saved Successfully <br><a href='/'>Go Back</a>");
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
