const express = require('express');
const app = express();
const port = 8000;

app.get('/:param', (req, res) => {
    res.send(`${req.params.param}`);
    console.log(req.params.param)
});

app.listen(port, () => {
    console.log('We are live on ' + port);
});

