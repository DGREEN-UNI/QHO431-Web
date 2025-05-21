const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (CSS, JS, images)
app.use(express.static('public'));

// Serve HTML files from 'views' folder
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'Homepage.html'));
});

app.get('/courses', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'courselisting.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
