📘 README.md
# Node.js Form + ESP32 + SQLite Dashboard App

এই application টি ব্যবহার করে:
- HTML Form থেকে data নেওয়া যায়
- ESP32 থেকে HTTP POST দিয়ে data পাঠানো যায়
- SQLite database এ data save হয়
- Dashboard এ table + chart দেখা যায়
- Row-wise delete করা যায়

---

## 🧰 Requirements

এই software গুলো লাগবে:

- Node.js (LTS version)
  👉 https://nodejs.org
- Web Browser (Chrome / Edge)
- (Optional) ESP32 + WiFi

---

## 📁 Project Structure



node_form_app/
│
├── server.js
├── package.json
├── package-lock.json
├── database.db
├── public/
│ ├── index.html
│ ├── dashboard.html
│ └── style.css
└── README.md


---

## 🚀 How to Run (Step-by-Step)

### Step 1️⃣: Project folder এ যাও
CMD / Terminal খুলে:

```bash

cd path/to/node_form_app

Step 2️⃣: Required modules install করো

npm install


এই command নিজে নিজে সব dependency install করবে

Step 3️⃣: Server চালাও
node server.js


Terminal এ দেখাবে:

Server running → http://localhost:3000

Step 4️⃣: Browser এ open করো

Home (Form):

http://localhost:3000


Dashboard:

http://localhost:3000/dashboard

📡 ESP32 থেকে Data পাঠানো

ESP32 HTTP POST করবে এই URL এ:

http://PC-IP:3000/save


Example:

http://192.168.1.10:3000/save


POST Data:

value1=25&value2=60

🗑️ Features

✅ Form to Database

✅ ESP32 HTTP POST support

✅ SQLite local database

✅ Dashboard table

✅ Chart visualization

✅ Row-wise delete

🛠️ Troubleshooting
Error: Cannot find module 'express'

Run:

npm install

Port already in use

Press:

Ctrl + C


Then run again:

node server.js

📌 Notes

node_modules folder copy করার দরকার নেই

package.json + package-lock.json থাকলেই যথেষ্ট

Database file: database.db