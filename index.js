const express = require("express");

const server = express();

server.use(express.json());

// creating the users array, which will be called later in a get request
let users = [
    {
        id: 1,
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

    res.status(201).json(userInformation)
})

server.listen(8000, () => console.log("API is cool"))