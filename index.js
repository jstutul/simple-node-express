const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome Again in Node World");
});
const users = [
  { id: 1, name: "tutul", age: 21, phone: "01763389144" },
  { id: 2, name: "alif", age: 24, phone: "01763389144" },
  { id: 3, name: "jubin", age: 24, phone: "01763389144" },
  { id: 4, name: "jhumm", age: 18, phone: "01763389144" },
  { id: 5, name: "razu", age: 33, phone: "01763389144" },
  { id: 6, name: "kalam", age: 45, phone: "01763389144" },
];
app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.json(newUser);
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.listen(port, () => {
  console.log("Listing from ", port);
});
