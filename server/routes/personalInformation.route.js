const express = require("express");
const router = express.Router();
const PersonalInformation = require("../models/personalInformation.model");

router.get("/", (req, res) => {
  PersonalInformation.find({}, (error, data) => {
    if (error) return console.log(error);
    res.send(data);
  });
});

router.get("/:id", (req, res) => {
  PersonalInformation.find({ _id: req.params.id }, (error, data) => {
    if (error) return console.log(error);
    console.log(data);
    res.send(data);
  });
});

router.post("/", (req, res) => {
  const newRecord = new PersonalInformation(req.body);
  newRecord.save((error, data) => {
    if (error)
      return console.log("there was an error inserting the object ", error);
    res.send(data);
    console.log("record saved! ", data);
  });
});

router.put("/:id", (req, res) => {
  res.send("this will update a basic profile");
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  PersonalInformation.findByIdAndRemove({ _id: id }, (error, data) => {
    if (error) {
      res.send("An error occurred :(");
    } else {
      res.send(`Registry with id ${id} removed`);
    }
  });
});

module.exports = router;
