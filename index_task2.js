const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const port = 8000;

app.get('/encode/:text', (req, res) => {
    const text = req.params.text;
    const encodeText = Vigenere.Cipher('password').crypt(text);
    res.send(`${encodeText}`);
    console.log(encodeText)
})

app.get('/decode/:text', (req, res) => {
    const text = req.params.text;
    const decodeText = Vigenere.Decipher('password').crypt(text);
    res.send(`${decodeText}`);
    console.log(decodeText)
})

app.listen(port, () => {
    console.log('We are live on ' + port);
});
