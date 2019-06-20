require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

// Routes
const personalInformationRoute = require('./routes/personalInformation.route');

const app = express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// DB Connection
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
  console.log('connected to MongoDB');
});

// Routes
app.use('/api/profile', personalInformationRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on Port: ${PORT}`);
})