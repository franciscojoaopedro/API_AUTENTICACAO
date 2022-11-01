const User=require("../models/User.model")

module.exports={
    async login(req,res){
        try {
            const {email,password}=req.body
            if(!email){
                return res.status(422).json({message:"O emaiel é obrigatório"})
            }
            if(!password){
                return res.status(422).json({message:"A senha é obrigatório"})
            }
            // verificar se o usuario existe
            try{
                const user=await User.findOne({email:email})

                if(!user){
                    return res.json({error:false,message:"Não Encontrado!"})
                }
            }catch(error) {
                return  res.json({error:true,message:error})
            }

        } catch (error) {
            return res.json({error:true,message:error})
        }
    }
}