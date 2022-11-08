require("dotenv").config();

const express=require("express");
const cors=require("cors");

const jwt=require("jsonwebtoken");

const app=express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

//Conectar a base de Dados
require("./services/database")();

const RouteUser=require("./routes/User.routes")
const RouteLogin=require("./routes/Login.user.routes");

//Open Route

// Register User
//index.js
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})
app.use("/",RouteUser);
app.use("/",RouteLogin)

app.listen(3000);

