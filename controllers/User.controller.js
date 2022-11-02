const bcrypt=require("bcrypt")
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
            const {name,email,password,confirmpassword}= await req.body;
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
              /* if(name && email && password){
                const user={name,email,password}
                return res.status(200).json({error:false,user:user})

               }
               */

               // verificar se existe um usuario
               const userExists= await User.findOne({email:email})
               if(userExists){
                return res.status(422).json({message:"Por favor, Utilize outro e-mail!"})
               }

               // criar senha
               const salt= await bcrypt.genSalt(12);
               const passwordHash= await bcrypt.hash(password,salt);
               const user=  new User({name,email,password:passwordHash})
               
               try {
                await user.save()
                return res.status(201).json({error:false,message:"usuario criado!"})
               } catch (error) {
                return res.json({error:true,message:error})
               }
        

        } catch (error) {
            res.status(500).json({
                message:"Aconteceu um erro no servidor, tente novamente mais tarde!"
            })
            res.json({error:true,message: error})
        }
    }
}