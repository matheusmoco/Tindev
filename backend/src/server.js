const express = require('express'); //import express lib
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes')

const server = express(); // chama a função


mongoose.connect('mongodb+srv://matheus:2324@cluster0-98uda.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333); //define a porta de entrada do server