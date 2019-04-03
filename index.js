const express = require('express');
const app = express();
const { halls } = require('halls');

app.get("/halls", function(req, res) {
    res.json(halls);    
});