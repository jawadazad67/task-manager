const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/task-manager', { useNewUrlParser: true, useUnifiedTopology: true });

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const taskRoutes = require('./routes/tasks');
app.use('/api', taskRoutes);

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
