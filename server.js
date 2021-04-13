const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
  {
    id:0001,
    name: "Bob Smith",
    email: "bobsmith@gmail.com",
    phone: 1234567890,
  },
//   {
//     routeName: "darthmaul",
//     name: "Darth Maul",
//     role: "Sith Lord",
//     age: 200,
//   },
//   {
//     routeName: "obiwankenobi",
//     name: "Obi Wan Kenobi",
//     role: "Jedi Knight",
//     age: 60,
//     forcePoints: 1350,
//   },
];

const waitlist =[
{
id: 0001,
name: 'Bob Smith',
email: 'bobsmith@gmail.com'
phone: 1234567890

}



]

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "home.html")));

app.get("/make", (req, res) => res.sendFile(path.join(__dirname, "make.html")));

app.get("/view", (req, res) => res.sendFile(path.join(__dirname, "view.html")));

app.post

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
