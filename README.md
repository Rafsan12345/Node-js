# Node-js

🛠️ 1️⃣ Node.js + Express Server

Purpose: Web server, API, form handle

CMD:

npm init -y
npm install express

🛠️ 2️⃣ SQLite Database

Purpose: Lightweight local database

CMD:

npm install sqlite3


Optional GUI tool (Windows/Linux/Mac) → DB Browser for SQLite
https://sqlitebrowser.org/dl/

🛠️ 3️⃣ Body parsing / Form handling

Already included in Express >= 4.16

Middleware:

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

🛠️ 4️⃣ Chart / Data Visualization (Frontend)

Purpose: Professional Dashboard

Library: Chart.js

CMD (for npm module):

npm install chart.js


অথবা CDN use করা যায় HTML এ:

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

🛠️ 5️⃣ CSV / Excel Export

CSV → Node.js built-in fs enough

Excel → Optional module:

npm install exceljs

🛠️ 6️⃣ Security / Auth (Optional)

HTTPS → Node.js built-in

JWT Token → User / IoT device authentication:

npm install jsonwebtoken

🛠️ 7️⃣ CORS (Optional for Mobile / IoT API)
npm install cors

const cors = require("cors");
app.use(cors());

🛠️ 8️⃣ Environment Variables (Optional)

For keys, passwords

npm install dotenv


.env file এ sensitive info রাখো:

DB_PATH=database.db
PORT=3000

🛠️ 9️⃣ Project Folder Structure (Professional)
project/
│
├── server.js         # Main Node.js server
├── database.db       # SQLite DB
├── package.json
├── public/           # Static files (HTML, CSS, JS)
│   ├── index.html
│   └── style.css
├── routes/           # API routes (optional)
├── controllers/      # Business logic
└── models/           # DB models

🔹 CMD Quick Install Summary
npm init -y
npm install express sqlite3 chart.js exceljs jsonwebtoken cors dotenv

এরপর আপনার server.js এ import করে ব্যবহার করতে পারবে।




ESP32
  ↓ HTTP POST
Node.js (/save)
  ↓
SQLite (database.db)
  ↓
Dashboard + Chart






