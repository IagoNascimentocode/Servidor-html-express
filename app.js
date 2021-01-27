const express = require('express');
const path = require('path')
const app = express();
const PORT = 8080;

app.use("/meusite",express.static(path.join(__dirname,"client")))


let consoleMethod = (req,res,next)=>{
    console.log(req.method)
    next()

}
let hello = (req,res)=>{

    res.send("<h1>Hellow Word</h1>")
}

app.get("/",consoleMethod,hello)
app.post("/",consoleMethod, hello)
app.put("/",consoleMethod,hello)
app.delete("/",consoleMethod,hello)

app.listen(PORT, ()=>{console.log(`Server Running on Port:${PORT}`)})