import { episodesData, podcastsData } from '../front/src/pages/data';

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const PORT = process.env.PORT || 5000;S

app.use(bodyParser.json());
app.use(cors());

// MongoDB configuration
mongoose.connect('mongodb://localhost:27017/podcastDB', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Authentication endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ success: true, message: 'Authentication successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Podcast schema
const podcastSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,  // Ajout de l'attribut image
  episodes: [{ title: String, description: String, audioSrc: String, date: Date }],
});

const Podcast = mongoose.model('Podcast', podcastSchema);

// Endpoint to add a podcast
app.post('/api/add-podcast', async (req, res) => {
  const { title, description, image, episodes } = req.body;

  const newPodcast = new Podcast({ title, description, image, episodes });

  await newPodcast.save();

  res.json({ success: true, message: 'Podcast added successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
