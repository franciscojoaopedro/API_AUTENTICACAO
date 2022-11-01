const mongoose=require("mongoose");

const dbUser=process.env.DB_USER;
const dbPassword=process.env.DB_PASS;
const urlTheConnection=`mongodb+srv://${dbUser}:${dbPassword}@cluster0.wcyzuzv.mongodb.net/usuario?retryWrites=true&w=majority`

const connectionDataBase=()=>{
    try {
        console.log({error:false, massage:"database running..."})
        mongoose.connect(urlTheConnection,{
            useNewUrlParser: true,
             useUnifiedTopology: true
        })
    } catch (error) {
        console.log(`${error} , erro de ligação!!!`)
    }
}

module.exports=connectionDataBase;