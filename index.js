const express = require('express');
const app = express();
const { halls } = require('./halls');

app.use("/", express.static('public'));

app.get("/halls", function(req, res) {
    res.json(halls);    
});

app.listen(3000);


