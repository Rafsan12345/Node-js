/************************************
 * 1️⃣ BASIC PRINT
 ************************************/
console.log("=== Node.js Full Basic Example ===");

/************************************
 * 2️⃣ VARIABLE & ALL OPERATIONS
 ************************************/
let a = 20;
let b = 10;

console.log("Add:", a + b);
console.log("Sub:", a - b);
console.log("Mul:", a * b);
console.log("Div:", a / b);
console.log("Mod:", a % b);

/************************************
 * 3️⃣ IF ELSE & LOOP
 ************************************/
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater");
}

for (let i = 1; i <= 5; i++) {
    console.log("Loop i =", i);
}

/************************************
 * 4️⃣ FUNCTION
 ************************************/
function add(x, y) {
    return x + y;
}
console.log("Function Add:", add(5, 7));

/************************************
 * 5️⃣ ARRAY & OBJECT
 ************************************/
let arr = [10, 20, 30];
console.log("Array:", arr);
console.log("Array index 1:", arr[1]);

let person = {
    name: "Rafsan",
    age: 25,
    role: "Engineer"
};
console.log("Object:", person);

/************************************
 * 6️⃣ FILE SYSTEM (READ / WRITE)
 ************************************/
const fs = require("fs");

fs.writeFileSync("data.txt", "Hello File System");
console.log("File Written");

let fileData = fs.readFileSync("data.txt", "utf-8");
console.log("File Read:", fileData);

/************************************
 * 7️⃣ DATE & TIME
 ************************************/
let now = new Date();
console.log("Date:", now.toDateString());
console.log("Time:", now.toLocaleTimeString());

/************************************
 * 8️⃣ TIMER (setTimeout & setInterval)
 ************************************/
setTimeout(() => {
    console.log("setTimeout executed after 2 sec");
}, 2000);

let count = 0;
let interval = setInterval(() => {
    count++;
    console.log("Interval running:", count);
    if (count === 3) {
        clearInterval(interval);
        console.log("Interval stopped");
    }
}, 1000);

/************************************
 * 9️⃣ HTTP SERVER
 ************************************/
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Home Page");
    } else if (req.url === "/api") {
        res.write(JSON.stringify({ temp: 25, hum: 60 }));
    } else {
        res.write("404 Not Found");
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

/************************************
 * 🔟 OS INFO
 ************************************/
const os = require("os");

console.log("OS Platform:", os.platform());
console.log("CPU Core:", os.cpus().length);
console.log("Free Memory:", os.freemem());
