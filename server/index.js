const express = require("express");
const connectDB = require("./config/db");
const ErrorResponse = require("./middlewares/errorResponse")
const dotenv = require('dotenv').config()
const cors = require('cors');

const port = process.env.PORT || 5000    


connectDB()

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",require("./routes/authRoutes"))


app.get("/", (req, res, next) => {
    res.send("Api running");
});

app.use(ErrorResponse)

app.listen(port, () => console.log(`Server started on port http://localhost:${port}`))
