require("dotenv").config();

const express=require("express");


const jwt=require("jsonwebtoken");
const cors=require("cors");


const app=express();
app.use(cors());
app.use(express.json());

//Conectar a base de Dados
require("./services/database")();

const RouteUser=require("./routes/User.routes")
const RouteLogin=require("./routes/Login.user.routes");

//Open Route
/*
app.get("/",(req,res)=>{
    try {
        res.status(200)
        .json({error:false,message:"Bem vindo a nossa API!"})
        //res.json({error:false,message:"Bem vindo a nossa API! RES"})
    } catch (error) {
        res.status(404).json({error:true,message:error})
    }
})

*/
// Register User
app.use("/",RouteUser);
app.use("/",RouteLogin)

app.listen(3000);

