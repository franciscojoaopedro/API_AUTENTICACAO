const express=require("express")
const routes=express.Router()

const Login=require("../controllers/Login.user.controllers")

routes.post("/auth/login",Login.login)
routes.get("/user/:id",Login.checkToken ,Login.token)


module.exports=routes