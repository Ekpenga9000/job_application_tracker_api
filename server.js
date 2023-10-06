const express = require("express"); 
const app = express(); 
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json())
app.get("/", (req, res)=>{
    res.json({message: "Welcome to job application tracker!! Api build is in progress...😁"}).status(200);
})

app.listen(5050, ()=>{
    console.log("Port has been cooking on port 5050🔥🔥🔥");
})
