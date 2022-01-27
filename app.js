const express = require("express");
const app = express();
const port = 3030;
const path = require('path');


app.listen(port,() => {
    console.log('Servidor corriendo en el puerto '+ port);
});
app.use('/',(req,res) => {
    res.sendFile(path.join(__dirname, './views/index.hmtl'));
});
/* app.use('/babbage',(req,res) => {
    res.sendFile(path.join(__dirname, './views/babbage.hmtl'));
});
app.use('/berners-lee',(req,res) => {
    res.sendFile(path.join(__dirname, './views/berners-lee.hmtl'));
});
app.use('/clarke',(req,res) => {
    res.sendFile(path.join(__dirname, './views/clarke.hmtl'));
});
app.use('/hamilton',(req,res) => {
    res.sendFile(path.join(__dirname, './views/hamilton.hmtl'));
});
app.use('/hopper',(req,res) => {
    res.sendFile(path.join(__dirname, './views/hopper.hmtl'));
});
app.use('/lovelace',(req,res) => {
    res.sendFile(path.join(__dirname, './views/lovelace.hmtl'));
});
app.use('/turing',(req,res) => {
    res.sendFile(path.join(__dirname, './views/turing.hmtl'));
}); */