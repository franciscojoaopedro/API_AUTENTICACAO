

const User=require("../models/User.model");

module.exports={
    read(req,res){
        try {
            res.status(200)
            .json({error:false,message:"Bem vindo a nossa API!"})
            //res.json({error:false,message:"Bem vindo a nossa API! RES"})
        } catch (error) {
            res.status(404).json({error:true,message:error})
        }
    },

  async create(req,res){

        try {    
            const {name,email,password,confirmpassword}=req.body;
               if(!name){
                   return res.status(422).json({message:"O nome é obrigatorio!"})
               }
               if(!email){
                   return res.status(422).json({message:"O email é obrigatorio!"})
               }
               if(!password){
                   return res.status(422).json({message:"O password é obrigatorio!"})
               }
               if(password !== confirmpassword){
                return res.status(422).json({message:" As Senhas não conferem!"})
               }
               if(name&& email && password){
                   const user={name,email,password}
                  return res.status(200).json({error:false,user:user})
               }
        } catch (error) {
            res.json({error:true,message: error})
        }
    }
}