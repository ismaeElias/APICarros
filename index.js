const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const app = express();
const client = require("./Database");
const _port = config.get('api.port');

app.use(bodyParser.json());

app.use('/api/carros', (req , res) => {
    client.query('SELECT * FROM TESTE',(err, result) => {
        if(err){
            console.log(err);
            res.status(400).send('Query não executada');
        } else {
            res.status(200).send(JSON.stringify(result.rows));
        }
    });
});

app.listen(_port , () => {
    console.log(`Server is running.. on Port: ${_port}`);
});