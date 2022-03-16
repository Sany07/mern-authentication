const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config()


connectDB()

const app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
    res.send("Api running");
});

const port = process.env.PORT || 5000    

app.listen(port, () => console.log(`Server started on port http://localhost:${port}`))
