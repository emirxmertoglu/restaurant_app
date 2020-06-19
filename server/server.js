const { Http2ServerResponse } = require('http2');
const { table } = require('console');

const http = require('http').createServer();
const io = require('socket.io') (http);

http.listen(3000);

let tables = [];
let orders = [];

io.on('connection', socket => {

    socket.on('new_table', (table) => {
        tables.push({
            id: socket.id,
            table: table
        });
        io.emit('tables', tables);
        io.emit('orders', orders);
    });

    socket.on('new_order', (order) => {
        orders.push("<b>" + order.table + " has ordered:</b> " + order.order);
        io.emit('orders', orders);
    });

    socket.on('disconnect', () => {
        const index = tables.indexOf(socket.id);
        tables.splice(index, 1);
        io.emit('tables', tables);
    });
});