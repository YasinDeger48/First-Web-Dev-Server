import express from "express";
import config from "config";
import jwt from "jsonwebtoken";


const users =[
    {_id: "U123",firstName : 'Yasin', lastName :'DEGER', email :'yasin@deger.com', password : '123456'}
]

const route = () =>{

    const router = new express.Router();

        router.route('/login').post((req,res) =>{

            const {email, password} =req.body;

            const user = users.find((user) => user.email === email);
            
            if(!user){
                res.send({
                    status : false,
                    message : "Bu email kayıtlı değildir"
                })
            }else {
                if(user.password === password){

                    const token =jwt.sign({userId : user._id}, config.jwtSecret);


                    res.send({
                        status : true,
                        message:"giriş işlemi başarılı",
                        token: token
                    })
                }else{
                    res.send({
                        status : false,
                        message: "Hatalı şifre girdiniz"
                    })
                }
            }
        })
    return router;
}

export default {
    route,
    routePrefix :`/${config.version}/auth`
}