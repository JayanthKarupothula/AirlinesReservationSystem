const options = {
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'password',
        database: 'node',
        port:3307
    }
}
const knex = require('knex')(options);
module.exports=knex;