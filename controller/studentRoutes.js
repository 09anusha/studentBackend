//studentRoutes is the server unit and calling it a controller. it is used to connect front end with the database.

const express = require("express");

const router = express.Router();
const studentSchema = require("../model/studentSchema");

//////getting the data from the database using get() function////////////////////
//req,res,next) =>{}) middleware function
router.get("/", (req, res, next) => {
  studentSchema.find((err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

////////////send the data object from front end to the backend//////
//building the link between server and the database
router.post("/create-student", (req, res, next) => {
  studentSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});
/////////Deleting the record //////////////////////////
router.delete("/delete-student/:id", (req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

//////////////Editing the record ////////////////////////
router
  .route("/update-student/:id")
  .get((req, res, next) => {
    studentSchema.findById(req.params.id, (err, data) => {
      if (err) {
        return next(err);
      } else {
        return res.json(data);
      }
    });
  })
  .put((req, res, next) => {
    studentSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      (err, data) => {
        if (err) {
          return next(err);
        } else {
          return res.json(data);
        }
      }
    );
  });

///////////Login Page /////////////////////
router.post("/login", (req, res) => {
  const { email } = req.body;
  studentSchema.findOne({ email: email }).then((student) => {
    if (student) {
      if (student.email === email) {
        res.json("login success");
      } else {
        res.json("Email incorrect");
      }
    } else {
      res.json("No record Found");
    }
  });
});

module.exports = router;
