import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import SignIn from "../componnts/SignIn";
import HeaderBar from "../componnts/HeaderBar";
import ProjectPage from "../componnts/projectPage/ProjectPage";
import Projects from "../componnts/projectsPage/Projects";
import CreateNewProject from "../componnts/createNewProjectPage/createNewProject";
import axios from "axios";
import Api from "../componnts/Api";
interface IArr {
  _id: string;
  name: string;
  status: string;
  situation: string;
}

const RoutesFront = () => {
  const [projectData, setProjectData] = useState<IArr[] | undefined>();
  const [projectId, setProjectId] = useState<string>();
  const [userToken, setUserToken] = useState<string>();
  const [user, setUser] = useState<{
    name: string;
    token: string;
    role: string;
  }>();

  useEffect(() => {
    //בקשה אימות לתוקן שקביל היוזר בכניסה למערכת לתוקן שנימצא בדאתא
    axios
      .post("http://localhost:3001/authenticateTheLoginOfAPageUser", {
        token: userToken,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userToken]);

  return (
    <Fragment>
      {userToken && <HeaderBar onData={setProjectData} />}
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<SignIn onUserToken={setUserToken} />} />
        {user?.token && (
          <>
            <Route
              path="/projects"
              element={<Projects data={projectData} onId={setProjectId} />}
            />
            <Route
              path="/project"
              element={<ProjectPage projectId={projectId} />}
            />
            <Route path="/create-new-project" element={<CreateNewProject />} />
          </>
        )}
      </Routes>
    </Fragment>
  );
};
export default RoutesFront;
