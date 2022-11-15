import * as React from "react";
import Box from "@mui/material/Box";
import { Divider, Toolbar, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import axios from "axios";
import Task from "./TaskFoProject";
import { useNavigate } from "react-router-dom";
import NewTask from "../createNewTask/newTask";
import EditProjectPage from "./EditProjectPage";
interface IProps {
  projectId: string | undefined;
}
interface IData {
  _id: string;
  name: string;
  status: string;
  situation: string;
  users: string;
  topUser: string;
  projectDescription: string;
  projectTeam: string;
  projectClient: string;
}
interface ITask {
  _id: string;
  projectId: string;
  taskDescription: string;
  startDate: string;
  endDate: string;
  taskTag: string;
  taskStatus: string;
}

const ProjectPage = ({ projectId }: IProps) => {
  const [dataProject, setDataProject] = React.useState<IData|undefined>();
  const [task, setTask] = React.useState<ITask[]>();
  const [taskStatus, setTaskStatus] = React.useState<string >();
  const [enterEditProject, setEnterEditProject] =
    React.useState<boolean>(false);
  const [enterNewTask, setEnterNewTask] = React.useState<boolean>(false);
  const [refreshingforTask, setRefreshingforTask] = React.useState<boolean>(false);
  const [refreshingforProject, setRefreshingforProject] = React.useState<boolean>(false);

  React.useEffect(() => {
    //בקשה לקבל את הנתונים של המפרויקט
    axios
      .post("http://localhost:3001/projectPage", { projectId: projectId })
      .then((res) => {
        setDataProject(res.data);
        console.log(dataProject);
        setRefreshingforProject(false)
      })
      .catch((err) => console.log(err));
  }, [refreshingforProject]);

  React.useEffect(() => {
    //בקשה לקבלת כל המשימות
    axios
      .post("http://localhost:3001/taskFoProject", { projectId: projectId })
      .then((res) => {
        setTask(res.data);
        setRefreshingforTask(false)
      })
      .catch((err) => console.log(err));
  }, [refreshingforTask]);
  return (
    <>
        <Box marginTop={10} style={{background:"#b0b0b0a1"}}>

      {dataProject && (
        <>
          <header>
            <Typography
              sx={{ fontSize: 26 }}
              color="text.secondary"
              gutterBottom
            >
              {`פרויקט ${dataProject.name}`}
            </Typography>
          </header>
          <Typography>{`תיאור הפרוקייט:${dataProject.projectDescription}`}</Typography>
          <Toolbar>
            <Stack
              spacing={2}
              divider={<Divider orientation="vertical" />}
              direction="row"
            >
              <Stack>
                <Typography>{`סטטוס:${dataProject.status} `}</Typography>
                <Typography>{`מצב:${dataProject.situation}`}</Typography>
              </Stack>
              <Stack></Stack>
              <Stack>
                <Typography>{`יש משתמשים:${dataProject.users}`}</Typography>
                <Typography>{`משתמש מוביל:${dataProject.topUser}`}</Typography>
              </Stack>
              <Stack>
                <Typography>{`צוות הפרוייקט:${dataProject.projectTeam}`}</Typography>
                <Typography>{`לקוח הפרוייקט:${dataProject.projectClient}`}</Typography>
              </Stack>
            </Stack>
          </Toolbar>
          
          </>
      )}
      </Box>

      <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
        {"משימות"}
      </Typography>
      <Stack spacing={3}>
        <Stack
          direction="row"
          spacing={0.5}
          divider={<Divider orientation="vertical" />}
        >
          <Button
            variant="outlined"
            color="success"
            sx={{ width: 150, boxShadow: 2 }}
            onClick={() => {
              setTaskStatus("פעיל");
              setEnterEditProject(false);
              setEnterNewTask(false);
            }}
          >
            {"פעיל"}
          </Button>
          <Button
            color="error"
            variant="outlined"
            sx={{ width: 150, boxShadow: 2 }}
            onClick={() => {
              setTaskStatus("לא פעיל");
              setEnterEditProject(false);
              setEnterNewTask(false);
            }}
          >
            {"לא פעיל"}
          </Button>
          <Button
            variant="outlined"
            sx={{ width: 150, boxShadow: 2, mt: 3 }}
            onClick={() => {
              setEnterNewTask(true);
              setEnterEditProject(false);
              setTaskStatus("")
            }}
          >
            {"משימה חדשה"}
          </Button>
          <Button
            variant="outlined"
            sx={{ width: 150, boxShadow: 2, mt: 3 }}
            onClick={() => {
              setEnterEditProject(true);
              setEnterNewTask(false);
              setTaskStatus("")
            }}
          >
            {"עריכת פרויקט"}
          </Button>
        </Stack>
      </Stack>

      {task?.map((item, key) => {
        return (
          item.taskStatus === taskStatus && <Task taskData={item} key={key} onTaskStatus={setTaskStatus} onRefreshingToTask={setRefreshingforTask}/>
        );
      })}
      {enterNewTask && (
        <NewTask projectId={projectId} onEnterNewTask={setEnterNewTask} onRefreshing={setRefreshingforTask}/>
      )}
      {enterEditProject && (
        <>
        <EditProjectPage
          projectId={projectId}
          dataProject={dataProject}
          onEnterEditProject={setEnterEditProject}
          onRefreshingforProject={setRefreshingforProject}
        />
        </>
      )}
    </>
  );
};
export default ProjectPage;
