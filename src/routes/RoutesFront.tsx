import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import SignIn from "../componnts/SignIn";
import HeaderBar from "../componnts/HeaderBar";
import ProjectPage from "../componnts/projectPage/ProjectPage";
import Projects from "../componnts/projectsPage/Projects";
import CreateNewProject from "../componnts/createNewProjectPage/createNewProject";
interface IArr {
  _id: string;
  name: string;
  status: string;
  situation: string;
}

const RoutesFront = () => {
  const [projectData, setProjectData] = useState<IArr[] | undefined>();
  const [projectId, setProjectId] = useState<string>();
  const [refreshingforProjects, setRefreshingforProjects] = useState<string |undefined>();//?
console.log(refreshingforProjects);
  return (
    <Fragment>
      <HeaderBar onData={setProjectData} refreshingforProjects={refreshingforProjects}/>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/projects"
          element={<Projects data={projectData} onId={setProjectId} />}
        />
        <Route
          path="/project"
          element={<ProjectPage projectId={projectId} />}
        />
            
        
        <Route path="/create-new-project" element={<CreateNewProject onRefreshingforProjects={setRefreshingforProjects}/>}/>
      </Routes>
    </Fragment>
  );
};
export default RoutesFront;
