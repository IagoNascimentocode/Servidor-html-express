const express = require('express');
const path = require('path')
const app = express();
const PORT = 8080;

app.use("/meusite",express.static(path.join(__dirname,"client")))

app.listen(PORT, ()=>{console.log(`Server Running on Port:${PORT}`)})