const bcrypt =require("bcrypt")
const jwt=require("jsonwebtoken");
const User=require("../models/User.model")

module.exports={
    async login(req,res){
        try {
            const {email,password}=req.body
            if(!email){
                return res.status(422).json({message:"O email é obrigatório"})
            }
            if(!password){
                return res.status(422).json({message:"A senha é obrigatório"})
            }
            // verificar se o usuario existe
            try{
                const user=await User.findOne({email:email})

                if(!user){
                    return res.json({error:false,message:"usuario não Encontrado!"})
                }
                // verificar o password
                const checkPassword=await bcrypt.compare(password,user.password)
                if(!checkPassword){
                    return res.json({error:false,message:"senha invalida!"})
                }


                try {
                    const secret=process.env.SECRET
                    const token=jwt.sign({id:user._id,},secret)
                    res.status(200).json({message:"Autenticação realizada com sucesso",token })
                } catch (error) {
                    console.log(error)
                    res.status(500).json({
                        message:"Aconteu um error no servidor,tente mais tarde"
                    })
                }



            }catch(error) {
                return  res.json({error:true,message:error})
            }

        } catch (error) {
            return res.json({error:true,message:error})
        }
    },
    checkToken(req,res,next){
        const authHeader=req.headers["authorization"]
        const token=authHeader && authHeader.split(" ")[1];
        if(!token){
            return res.status(401).json({message:"acesso negado!!"})
        }
        try {
            const secret=process.env.SECRET
            jwt.verify(token,secret)
            next()
        } catch (error) {
            return res.status(400).json({message:"Token invalide!!...."})
        }
    },
    async token(req,res){
        const id=req.params.id;
    
        // verficar se p usuario existe!!
        const user=  await User.findById(id,"-password")
        if(!user){
            return res.status(404).json({message:"usuario não encontrado!"})
        }
        const {_id,name,email}= await user
       return res.json({error:false, user:{_id,name,email}})
    }
}