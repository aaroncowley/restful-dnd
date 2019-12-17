const db = require('mongoose');

db.Promise = global.Promise;
const dbURI = 'mongodb://localhost/characters_dnd';
db.connect(dbURI, { useNewUrlParser: true });
// CONNECTION EVENTS
// When successfully connected
db.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
db.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
db.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    db.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

module.exports = {db};