import { Router } from "express";
import { fo, signInPage, authenticationToken } from "./functionFoRoutrs/signInPage";
import { Request, Response, NextFunction } from "express";

const router = Router();
//הפונקציה מאמתת את הסיסמא של היוזר בדאתא ואז מקבלת תוקן עבור היוזר ומחזירה אותו לפרונט
router.post("/signInPage",signInPage);

//הראוט מקבל את התוקן מהפרונט ןאז הפונקציה הראושנה מאמתת את התוקן ומחזירה שהיוזר נמצא בדאתא
router.get("/authenticationToken",authenticationToken,fo);

// router.get("/chart?v=2.9.4&c={ type: 'bar', data: { labels: ['January', 'February', 'March', 'April', 'May'], datasets: [ { label: 'Dogs', data: [50, 60, 70, 180, 190] }, { label: 'Cats', data: [100, 200, 300, 400, 500] }, ], }, }",(req: Request,
    // res: Response)=>{
        // return res.send()
    // })
export default router
