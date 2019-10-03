require('dotenv').config()
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');
const path = require('path');

// Routes
const personalInformationRoute = require('./routes/personalInformation.route');

const app = express();
app.use(cors());

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// DB Connection
mongoose.connect(process.env.MONGOLAB_URI,{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => console.log('Connected to MongoDB'));

// API routes
app.use('/api/profiles', personalInformationRoute);

app.use(express.static('app/dist'));

app.get('/profile/*', (req, res) => {
  res.sendFile(__dirname + 'app/dist/index.html');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
})