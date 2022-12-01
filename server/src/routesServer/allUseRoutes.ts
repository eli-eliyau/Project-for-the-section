import { Expression } from "mongoose";
import routersProjectsHomePage from './routersProjectsHomePage'
import routersEditTask from './routersEditTask'
import routersProjectPage from "./routersProjectPage";
import routersSignInPage from "./routersSignInPage";
import routersCreateNewTaskPage from "./routersCreateNewTaskPage"
import routersEditProjectPage from './routersEditProjectPage'
import routersCreateNewProjectPage from './routersCreateNewProjectPage'
import routersCreateNewAdjunctPage from './routersCreateNewAdjunctPage'

const allRoutes=(app:Expression)=>{
    //בודק כניסה של משתמש למערכת לפי הטבלה האם הוא קיים
    app.use(routersSignInPage)
    //ראוטים של דף הבית של הפרויקטים
    app.use(routersProjectsHomePage)
    //ראוטים של דף הפרויקט עצמו
    app.use(routersProjectPage)
    //ראוט של עידכון משימה 
    app.use(routersEditTask)
    //ראוט ליצירת משימה חדשה 
    app.use(routersCreateNewTaskPage)
    //ראוט לעריכת פרויקט קיים
    app.use(routersEditProjectPage)
    //ראוט יצירת פרויקט חדש בטבלה
    app.use(routersCreateNewProjectPage)
    //ראוט יצירת ניספח חדש למשימה
    app.use(routersCreateNewAdjunctPage)
    
}
export default allRoutes