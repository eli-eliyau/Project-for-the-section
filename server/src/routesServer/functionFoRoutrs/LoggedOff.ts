import { Request, Response, NextFunction } from "express";
import UsersSchema from "../../schemas/UsersSchema";



 const LoggedOff = async(req:Request,res:Response) => {
    try{
        const userLoggedOff = await UsersSchema.findOneAndUpdate({name:req.body.name},{token:""})
        // userLoggedOff?.save()
        res.send(userLoggedOff)
    }catch(err){
        console.log(err);
        
    }
}
export default LoggedOff