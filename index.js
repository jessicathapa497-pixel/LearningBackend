const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./db/db");

dotenv.config();

const app = express();

app.use("/auth", require("./routes/userRoutes"));



connectToDatabase();

const PORT = process.env.PORT;

console.log("Server file loaded");

app.get("/", (req, res) => {
    console.log("Home route hit");
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log("Server running on port 5000");
});
