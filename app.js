require("dotenv").config();

const express=require("express");
const cors=require("cors");

const jwt=require("jsonwebtoken");

const app=express();
app.use(cors());
app.use(express.json());

//Conectar a base de Dados
require("./services/database")();

const RouteUser=require("./routes/User.routes")
const RouteLogin=require("./routes/Login.user.routes");

//Open Route

// Register User
app.use("/",RouteUser);
app.use("/",RouteLogin)

app.listen(3000);

