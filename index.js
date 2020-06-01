const express = require("express");


//create a server
const server = express();
server.use(express.json())

//functions


//listen for incoming requests
const port = 8000;

server.listen(port, () => console.log(`Server is running on ${port}`))