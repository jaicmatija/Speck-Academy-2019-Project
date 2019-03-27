const http = require('http');
const { halls } = require('./halls');
const _ = require('lodash');

const uniqNames = _.uniq(_.map(halls, 'name'));

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'});
    res.write(uniqNames.join(', '));
    res.end();
}).listen(8080);
