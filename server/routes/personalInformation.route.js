const express = require('express');
const router = express.Router();
const personalInformationObject = require('../models/personalInformation.model');

router.get('/:id', (req, res) => {
  res.send(`The parameter to query is: ${req.params.id}`);
});

router.post('/', (req, res) => {
  console.log(req.body);
  const newRecord = new personalInformationObject(req.body);
  console.log(newRecord);
  newRecord.save((error, data) => {
    if (error) return console.log('there was an error inserting the object ', error);
    res.send(data);
    console.log('record saved! ', data);
  })
})

router.put('/:id', (req, res) => {
  res.send('this will update a basic profile');
})

router.delete('/:id', (req, res) => {
  res.send('this will delete a specific profile');
})

module.exports = router;