/* eslint-disable react/jsx-no-duplicate-props */
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import axios from "axios";
import Task from "./TaskFoProject";
import { Outlet, useNavigate } from "react-router-dom";
import NewTask from "../createNewTask/newTask";
import { ListFormat } from "typescript";
interface Iprops {
  idProject: string | undefined;
}
interface IData {
  _id: string;
  name?: string;
  status?: string;
  situation?: string;
  users: string;
  topUser: string;
  projectDescription: string;
  projectTeam: string;
  projectClient: string;
}
interface ITask {
  _id: string;
  projetId: string;
  taskDescription: string;
  startDate: string;
  endDate: string;
  taskTag: string;
  taskStatus: string;
}

const ProjectPage = ({ idProject }: Iprops) => {
  const [dataProject, setDataProject] = React.useState<IData>();
  const [task, setTask] = React.useState<ITask[]>();
  const [taskStatus, setTaskStatus] = React.useState<string>();
  const navigte = useNavigate();

  React.useEffect(() => {
    //בקשה לקבל את הנתונים של המפרויקט
    axios
      .post("http://localhost:3001/projectPage", { _id: idProject })
      .then((res) => {
        setDataProject(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    //בקשה לקבלת כל המשימות
    axios
      .post("http://localhost:3001/taskFoProject", { idProject: idProject })
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => console.log(err));
  }, [taskStatus]);
  return (
    <>
      {dataProject && (
        <Box paddingTop={10}>
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

              <Stack
              // direction="row"
              // spacing={3}
              // divider={<Divider orientation="horizontal" flexItem/>}
              >
                <Typography>{`יש משתמשים:${dataProject.users}`}</Typography>
                <Typography>{`משתמש מוביל:${dataProject.topUser}`}</Typography>
              </Stack>

              <Stack
              // direction="row"
              // spacing={3}
              // divider={<Divider orientation="horizontal" flexItem/>}
              >
                <Typography>{`צוות הפרוייקט:${dataProject.projectTeam}`}</Typography>
                <Typography>{`לקוח הפרוייקט:${dataProject.projectClient}`}</Typography>
              </Stack>
            </Stack>
          </Toolbar>
        </Box>
      )}
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
            }}
          >
            {"לא פעיל"}
          </Button>
          <Button
            variant="outlined"
            sx={{ width: 150, boxShadow: 2, mt: 3 }}
            onClick={() => {
              setTaskStatus("");
            }}
          >
            {"משימה חדשה"}
          </Button>
        </Stack>
      </Stack>
      {task?.map((item, key) => {
        return (
          item.taskStatus === taskStatus && <Task taskData={item} key={key} />
        );
      })}
      {taskStatus === "" && <NewTask idProject={idProject} />}
    </>
  );
};
export default ProjectPage;
