// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/registration', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log('MongoDB Connection Error:', err));

// Schema for registration data
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  gender: String,
  dob: Date,
  nationality: String,
  country: String,
  state: String,
  city: String,
  zip: String,
  occupation: String,
  maritalStatus: String,
  language: String,
  education: String,
  highestQualification: String,
  skills: String,
  interests: String,
  preferredContact: String,
  socialMediaLinks: String,
  emergencyContactName: String,
  emergencyContactPhone: String,
  healthCondition: String,
  allergies: String,
  dietaryRestrictions: String
});

// Model for registration
const Registration = mongoose.model('Registration', registrationSchema);

// POST route for registration form submission
app.post('/register', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();
    res.status(200).json({ message: 'Registration Successful!' });
  } catch (error) {
    res.status(400).json({ message: 'Error saving data' });
  }
});

// GET route for fetching registration data (for report)
app.get('/report', async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.status(200).json(registrations);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching data' });
  }
});

// Start server on port 5000
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
