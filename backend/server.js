const app=require('./app');
const connectDatabase = require("./db/Database");

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err}`);
  console.log("server is shutting down due to uncaught exception errors.");
  process.exit(1);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/.env" });
}

connectDatabase();



// unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err}`);
  console.log(
    "server is shutting down due to unhandled promise rejection errors."
  );
  server.close(() => process.exit(1));
});