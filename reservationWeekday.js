const http = require('http');
const { halls } = require('./halls');
const { DateTime } = require('luxon');

const reservedHalls = halls.filter(hall => hall.reservation.isReserved);
const firstReservedHall = reservedHalls[0];
const reservedUntilDateTime = DateTime.fromJSDate(firstReservedHall.reservation.reservedUntil);


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(reservedUntilDateTime.toFormat('cccc,LLLL dd'));
}).listen(8080);
