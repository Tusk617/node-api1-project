const express = require("express");
const shortid = require("shortid");


//create a server
const server = express();
server.use(express.json())

let users = [
    {
        id:shortid.generate(),
        name: "Andrew W.K",
        bio: "Unnoficial Ambassador of partying"
    }
]

//functions
server.get("/api/users", (req, res) => {

    if (!users) {
        return res.status(500).json({errorMessage: "The users information could not be retrieved."})
    } else return res.status(200).json(users)
})

//listen for incoming requests
const port = 8000;

server.listen(port, () => console.log(`Server is running on ${port}`))