//studentSchema is the model of the database
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstName: { type: "String" },
    lastName: { type: "String" },
    email: { type: "string" },
    contact: { type: "number" },
    parentName: { type: "String" },
    parentContact: { type: "Number" },
  },
  { 
    collection: "Students",
  }
);

// attributes alone is called as Schema
//attribute + value = model
module.exports = mongoose.model("Students", studentSchema); // it takes in two attributs 1)name of the collection 2)name of the file
// exporting the schema in the form of model
