const http = require("http");
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || 'fd_mongoose_db';

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`).catch((err) => {
  console.log(err);
  process.exit(1);
})
const app = express();
app.use(express.json());

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`server is active on ${PORT}`);
});