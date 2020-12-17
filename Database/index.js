const { Client } = require("pg");
const connectionString = "postgress://postgres:dbaaccesskey@localhost:5432/Carros";

const client = new Client({
    connectionString : connectionString
});

client.connect();

module.exports = client;