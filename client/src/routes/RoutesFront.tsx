/* eslint-disable no-mixed-operators */
/* eslint-disable no-lone-blocks */
import { Routes, Route, Navigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import SignIn from "../componnts/SignIn";
import HeaderBar from "../componnts/HeaderBar";
import ProjectPage from "../componnts/projectPage/ProjectPage";
import Projects from "../componnts/projectsPage/Projects";
import CreateNewProject from "../componnts/createNewProjectPage/createNewProject";
import axios from "axios";
import img from "../imgs/images.png";
import SignUp from "../componnts/sign_up/SignUp";
import P from "../componnts/projectsPage/P";

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
        {
          res.data && localStorage.setItem("user", String("1"));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userToken]);
  let userValid = localStorage.getItem("user");
  console.log(user?.name);
  return (
    <Fragment>
      {/* {userValid && <HeaderBar onData={setProjectData} />} */}
      {userValid === null ? (
        <Routes>
          <Route
            path="/login"
            element={<SignIn onUserToken={setUserToken} />}
          />
          <Route
            path="/sing-up"
            element={<SignUp onUserToken={setUserToken} />}
          />
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      ) : (
        <>
          <HeaderBar onData={setProjectData} user={user}/>
          <Routes>
            <Route path="*" element={<Navigate to="/projects" replace />} />
            <Route
              path="/projects"
              // element={<Projects data={projectData} onId={setProjectId} />}
              element={<P data={projectData} userName={user?.name} onId={setProjectId}/>}
            />
            <Route
              path="/project"
              element={<ProjectPage projectId={projectId} />}
            />
            <Route path="/create-new-project" element={<CreateNewProject />} />
          </Routes>
        </>
      )}
    </Fragment>
  );
};
export default RoutesFront;
