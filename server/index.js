var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ port: 3000 });
server.route({
    method: 'GET',
    path: '/{filename}',
    handler: {
        file: function (request) {
            return '../client/html/' + request.params.filename;
        }
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
});
