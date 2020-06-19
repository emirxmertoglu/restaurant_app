const { Http2ServerResponse } = require('http2');

const http = require('http').createServer();
const io = require('socket.io') (http);

http.listen(3000);

let orders = [];

io.on('connection', socket => {
    console.log('bir musteri baglandi');

    socket.on('disconnect', () => {
        console.log('bir musteri ayrildi');
    });
});