const path = require('path');
const http = require('http');

const morgan = require('morgan');

const express = require('express');
const router = express.Router();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8888;

app.use(morgan('tiny'));
app.set('view engine', 'pug');

app.use(express.static('public'));

// app.get('/', function (req, res) {
//   res.render('index', { title: 'Hey', message: 'Hello there!' })
// })

server.listen(port);
server.on('listening', function() {
    console.log('Listening on ' + port);
});