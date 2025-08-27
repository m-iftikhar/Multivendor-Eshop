const express= require('express');
const app=express();



// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}






const server = app.listen(process.env.PORT, () =>
  console.log(`server is connected to port ${process.env.PORT}`)
);



module.exports = app;