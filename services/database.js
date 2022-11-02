const mongoose=require("mongoose");

const dbUser=process.env.DB_USER;
const dbPassword=process.env.DB_PASS;
const connection=`mongodb+srv://${dbUser}:${dbPassword}@cluster0.wcyzuzv.mongodb.net/usuario?retryWrites=true&w=majority`
const localdb="mongodb://localhost:27017/authnodejsjwt"

const connectionDataBase=()=>{
    try {
        console.log({error:false, massage:"database running..."})
        mongoose.connect(localdb,{
            useNewUrlParser: true,
             useUnifiedTopology: true
        })
    } catch (error) {
        console.log(`${error} , erro de ligação!!!`)
    }
}

module.exports=connectionDataBase;