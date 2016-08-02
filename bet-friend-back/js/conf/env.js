(function () {
    'use strict';

    /**
     * The configuration.
     */
    var config = function () {
        switch (process.env.NODE_ENV) {
            case 'production':
                return {
                    server : {
                        port : 8080
                    },
                    db : {
                        user : 'postgres',
                        database : 'bet-friend',
                        password : 'postgres',
                        port : 5432,
                        max : 10,
                        min : 2,
                        idleTimeoutMillis : 30000
                    }
                };
            default:
                return {
                    server : {
                        port : 8081
                    },
                    db : {
                        user : 'postgres',
                        database : 'bet-friend',
                        password : 'postgres',
                        port : 5432,
                        max : 10,
                        min : 2,
                        idleTimeoutMillis : 10000
                    }
                };
        }
    };

    module.exports = config();
})();