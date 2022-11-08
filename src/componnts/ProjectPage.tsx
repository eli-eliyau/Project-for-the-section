import axios from "axios"
interface Iprops{
    id:IArr[]|undefined
}
interface IArr {
  id:string 
  name?: string;
  status?: string;
  situation?: string;
}

const ProjectPage=({id}:Iprops)=>{
    
// const getProject=()=>{
    // // axios.post("http://localhost:3000/projectPage").then((res)=>{};
    // }).catch((err)=>{
            // console.log(err);
    // })
// }
return <></>
}

export default ProjectPage