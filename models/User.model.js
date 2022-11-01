const mongoose=require("mongoose");
const {Schema}=mongoose

const schemaUser= new Schema({
    name:String,
    email:String,
    password:String,
},
{
    timestamps:true
}
)

const User=mongoose.model("User",schemaUser)
module.exports=User;