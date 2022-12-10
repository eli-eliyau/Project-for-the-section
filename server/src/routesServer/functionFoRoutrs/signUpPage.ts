import { Request, Response, NextFunction } from "express";
import UsersSchema from "../../schemas/UsersSchema";


// פונקציה שמקבל פרטים על יוזר חדש ומכניסה אותו לדאטא
export const signUpPage = async(req:Request,res:Response) => {
    
try{
    const user =await new UsersSchema(req.body)
    user.save()
    return res.send(user)
}
catch(err){
    console.error(err)
}
}
