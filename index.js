const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

console.log("Server file loaded");

app.get("/", (req, res) => {
    console.log("Home route hit");
    res.send("Hello World!");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
