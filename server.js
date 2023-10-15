const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from a 'public' directory

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});