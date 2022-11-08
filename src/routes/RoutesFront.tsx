import {Routes,Route ,Navigate} from 'react-router-dom'
import {Fragment, useEffect, useState} from 'react'
import SignIn from '../componnts/SignIn'
import HeaderBar from '../componnts/HeaderBar'
import ProjectPage from '../componnts/ProjectPage'
import Projects from '../componnts/Projects'
interface IArr {
    id:string;
    name: string;
    status: string;
    situation: string;
  }

const RoutesFront=()=>{
    
    
    
    const [projectData,setProjectData]=useState<IArr[]|undefined>()
    
    

    useEffect(()=>{
        console.log(projectData);
    },[projectData])

return (
<Fragment>
<HeaderBar onId={setProjectData}/>
    <Routes>
        <Route path='/' element={<Navigate replace to="/login"/>}/>
        <Route path='/login' element={<SignIn />}/>
        <Route path='/projects' element={<Projects data={projectData}/>} />
        <Route path="/project" element={<ProjectPage id={projectData}/>} />
    </Routes>
</Fragment>
)
}
export default RoutesFront