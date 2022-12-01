import { Request, Response, NextFunction } from "express";
import UsersSchema, { genToken } from "../../schemas/UsersSchema";
import jwt from "jsonwebtoken";

//הפונקציה מאמתת את הסיסמא של היוזר ויוצרת תוקן ע"י פונקציה
export const signInPage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);

  try {
    const user = await UsersSchema.findOne({ pass: req.body.pass });
    if (user?.pass === req.body.pass) {
      let newToken = genToken(user?._id);
      //מכניס את התוקן שנשלח ליוזר בכניסה למערכת גם לדאתא כדי לאמת בכל כניסה לדף בפרונט
      await UsersSchema.findOneAndUpdate(
        { _id: user?._id },
        { token: newToken }
      );
      return res.json({ token: newToken });
    }
  } catch (error) {
    console.log(error);
  }
};

//פונקציה שעושה אימות לתוקן של יוזר
export const authenticationToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: any = req.header("x-api-key");
    let userId = jwt.verify(token, "ELI");
    req.body.userId = userId;
  } catch (error) {
    console.log(error);
  }
  next();
};

//לאחר אימות התוקן נקבל מהפונקציה הקודמת את התוקן המתורגם שהוא אידי של היוזר ואז נבקש את פרטי היוזר ונחזיר לפרונט
export const fo = async (req: Request, res: Response) => {
  try {
    let user = await UsersSchema.findOne(
      { _id: req.body.userId },
      { dade_created: 0, pass: 0 }
    );

    return res.json(user);
  } catch (err) {
    console.log(err);
  }
};
