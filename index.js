const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const expressApp = express();
const router = express.Router();

const initalRoute = router.get("/",(req,res,next)=>{
    res.send("<h1>Hello Node</h1>")
})

const userRoute = router.get("/:id", (req, res, next) => {
   
  res.send(`<h1>Hello ${req.params.id}</h1>`);
});

expressApp.use(initalRoute)



http.createServer(expressApp).listen(4000,()=>{
    console.log("Listening to https://localhost:4000")
})