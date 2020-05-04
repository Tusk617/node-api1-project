const express = require("express");

const server = express();

server.use(express.json());

// creating the users array, which will be called later in a get request
let users = [
    {
        id: 0,
        name: "CoolGuy7",
        bio: "Just a cool guy, what can I say?"
    }
]

server.get("/", (req, res) => {
    res.json({ api: "Hello World!" });
})

server.get("/api/users", (req, res) => {
    //calling the users array
    res.json(users);
})

server.post("/api/users", (req, res) => {
    const userInformation = req.body;

    users.push(userInformation);

    res.status(400).json(userInformation)
})

server.get("/api/users/:id", (req, res) => {
    let id = Number(req.params.id)

    let filteredUsers = users;

    filteredUsers = filteredUsers.filter((user) => user.id === id);

    res.status(202).json(filteredUsers);
})

server.delete("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)

    users = users.filter((user) => user.id !== id);

    res.status(200).json(users);
})

server.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const userName = req.body.name;

    console.log("Before Update: ", users[id])
    users[id].name = userName;
    users[id].bio = req.body.bio;
    console.log("After Update: ", users[id])

    res.json(users);
})

server.listen(8000, () => console.log("API is cool"))