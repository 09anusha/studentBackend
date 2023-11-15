const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors"); //importing cors
const studentRoutes = require("./controller/studentRoutes");

//connecting to data base
mongoose.set("strictQuery", true);
const uri =
  "mongodb+srv://anusha0907:anu9006@cluster0.q7u2ctd.mongodb.net/MyHighSchool"; // link from mongodb atlas

mongoose.connect(uri);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Database connected");
});
db.on("error", (error) => {
  console.log("error while connecting to database", error);
});

app.use(express.json());
app.use(cors()); // instantiating cors
app.use("/students", studentRoutes); // creating our own url to open studentRoutes

const port = 5000;
app.listen(port, () => {
  console.log("server listening on port ", port);
});
