/**
 * @fileOverview Database creation.
 * @author <a href="mailto:maxime.gris@gmail.com">Maxime GRIS</a>
 * @version 1.0.0
 */
(function () {

    'use strict';

    var Pool = require('pg').Pool;
    var env = require('./env');

    //this initializes a connection pool
    //it will keep idle connections open for a 30 seconds
    //and set a limit of maximum 10 idle clients
    var pool = new Pool(env.db);

    pool.on('error', function (err, client) {
        // if an error is encountered by a client while it sits idle in the pool
        // the pool itself will emit an error event with both the error and
        // the client which emitted the original error
        // this is a rare occurrence but can happen if there is a network partition
        // between your application and the database, the database restarts, etc.
        // and so you might want to handle it and at least log it out
        console.error('idle client error', err.message, err.stack)
    });
    
    module.exports = {
        pool : pool
    };

})();