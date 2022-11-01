require("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const cors=require("cors");


const app=express();
app.use(cors());
app.use(express.json());

