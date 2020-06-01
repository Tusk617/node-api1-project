const express = require("express");
const shortid = require("shortid");


//create a server
const server = express();
server.use(express.json())

let users = [
    {
        id: 1,
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

server.get("/api/users/:id", (req, res) => {
    let userId = Number(req.params.id);

    const filteredUsers = users.filter((user) => user.id === userId);
    if (filteredUsers[0] === undefined) {
        return res.status(404).json({error: "User does not exist"})
    } else if (!users) {
        return res.status(500).json({error: "User info could not be retrieved"})
    } else return res.status(200).json(filteredUsers);
})

//listen for incoming requests
const port = 8000;

server.listen(port, () => console.log(`Server is running on ${port}`))