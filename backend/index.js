const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const Message = require('./models/Message');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/v1/users/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `${name} <${email}>`,  // Sender's name and email
    to: process.env.EMAIL_USER,   // Recipient's email from environment variable
    subject: `Message from ${name}`,
    text: message,
  };

  try {
    // Save message to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
