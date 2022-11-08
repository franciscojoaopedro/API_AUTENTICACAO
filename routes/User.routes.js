const express=require("express");
const routes=express.Router();

const User=require("../controllers/User.controller")

routes.get("/user",User.read);
routes.post("/auth/register",User.create);




module.exports=routes;