const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config()

const port = process.env.PORT || 5000    


connectDB()

const app = express();

app.use(express.json());

app.use("/api/auth",require("./routes/authRoutes"))


app.get("/", (req, res, next) => {
    res.send("Api running");
});


app.listen(port, () => console.log(`Server started on port http://localhost:${port}`))
