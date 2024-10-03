/* eslint-disable */
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const projectRoot = process.cwd();

app.use(express.static(path.join(projectRoot, 'src')));
app.get('/', (req, res) => {
    res.sendFile(path.join(projectRoot, 'public', 'index.html'));
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});