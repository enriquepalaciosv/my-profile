require('dotenv').config()
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

// Routes
const personalInformationRoute = require('./routes/personalInformation.route');

const app = express();
app.use(cors());

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// DB Connection
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/profiles', personalInformationRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on Port: ${PORT}`);
})