const express = require('express');
const bodyParser = require('body-parser');
const {
    halls,
    init: initHalls,
    add,
    update,
    remove
} = require('./halls');

initHalls();

const app = express();


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use("/", express.static('public'));

app.get("/halls", function (req, res) {
    res.json(halls);
});

app.post("/hallsCreate", function (req, res) {
    add(req.body.hallName);
    res.redirect("/halls");
});

app.post("/hallsUpdate", function (req, res) {
    const hallId = parseInt(req.body.hallId);
    const isReserved = req.body.isReserved === 'on';
    const reservedFrom = new Date();
    const reservedUntil = new Date(req.body.reservedUntil);

    update(hallId, isReserved, reservedFrom, reservedUntil);

    res.redirect("/halls");
});

app.post("/hallsDelete", function (req, res) {
    const hallId = parseInt(req.body.hallId);
    remove(hallId);
    res.redirect("/");
});

app.listen(3011);