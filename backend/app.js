const express= require('express');
const app=express();
// const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const ErrorHandler = require("./middleware/error");
const cors=require('cors');





// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(fileupload());
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));


// Route Imports

const user = require('./controller/userController');
app.use("/api/v1/user", user);



const server = app.listen(process.env.PORT, () =>
  console.log(`server is connected to port ${process.env.PORT}`)
);


app.use(ErrorHandler);
module.exports = app;