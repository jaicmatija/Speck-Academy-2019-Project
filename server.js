const http = require('http');

const halls = [{
    id: 234,
    name: "Dvorana Gradske knjižnice",
    reservation: {
        isReserved: true,
        reservedFrom: new Date(2019, 3, 25, 10),
        reservedUntil: new Date(2019, 3, 25, 12),
    }
}, {
    id: 264,
    name: "Konferencijske dvorane RCTP (Razvojni centar i tehnološki park)",
    reservation: {
        isReserved: false,
        reservedFrom: null,
        reservedUntil: null,
    }
}, {
    id: 534,
    name: "Dvorana TIC (Turistički dom)",
    reservation: {
        isReserved: false,
        reservedFrom: null,
        reservedUntil: null,
    }
}, {
    id: 123,
    name: "Dvorana Hrvatskog doma",
    reservation: {
        isReserved: true,
        reservedFrom: new Date(2019, 3, 23, 12),
        reservedUntil: new Date(2019, 3, 23, 14),
    }
}, {
    id: 425,
    name: "Velika sportska dvorana",
    reservation: {
        isReserved: true,
        reservedFrom: new Date(2019, 3, 25, 11),
        reservedUntil: new Date(2019, 3, 25, 12),
    }
}];

const hallNames = halls.map(hall => hall.name);
const hallNamesWithComma = hallNames.join(', ');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
    res.write(hallNamesWithComma);
    res.end();
}).listen(8080);
