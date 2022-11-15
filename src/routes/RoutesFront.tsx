import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import SignIn from "../componnts/SignIn";
import HeaderBar from "../componnts/HeaderBar";
import ProjectPage from "../componnts/projectPage/ProjectPage";
import Projects from "../componnts/projectsPage/Projects";
import newTask from "../componnts/createNewTask/newTask";
import NewTask from "../componnts/createNewTask/newTask";
interface IArr {
  _id: string;
  name: string;
  status: string;
  situation: string;
}

const RoutesFront = () => {
  const [projectData, setProjectData] = useState<IArr[] | undefined>();
  const [idProject, setIdProject] = useState<string>();

  return (
    <Fragment>
      <HeaderBar onData={setProjectData} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/projects"
          element={<Projects data={projectData} onId={setIdProject} />}
        />
        <Route
          path="/project"
          element={<ProjectPage idProject={idProject} />}
        >
            
        </Route>
      </Routes>
    </Fragment>
  );
};
export default RoutesFront;
