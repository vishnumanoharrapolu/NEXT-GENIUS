// index.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

(async () => {
  await dbConnect();
})();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static('public')); // Serve static files from the 'public' directory

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Here you would typically verify the credentials against your database
  if (username === 'admin' && password === 'password') { // Replace with actual validation
    // Redirect to bob.html
    res.redirect('/bob.html');
  } else {
    // Handle incorrect credentials
    res.status(401).send('Invalid credentials');
  }
});

// Route to serve bob.html
app.get('/bob.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bob.html'));
});

// Start the server
const port = process.env.PORT || 7002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});