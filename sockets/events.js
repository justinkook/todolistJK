module.exports = function (task) {

    task.on('connection', function(socket) {
        console.log('connected');

        socket.on('add-todo', function(data) {
            task.emit('emit-todo', data);
        });
        
        socket.on('set-done', function(data) {
            task.emit('emit-done', data);
        });

        socket.on('delete-todo', function(data) {
            task.emit('emit-delete', data);
        });
    })
}