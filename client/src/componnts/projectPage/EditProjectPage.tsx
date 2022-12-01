import { Button, Card, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

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

interface IProps {
  projectId: string | undefined;
  onEnterEditProject: (enter: boolean) => void;
  dataProject: IData | undefined;
  onRefreshingforProject:(ref:boolean)=>void
}

const a = [
  "שם",
  "סטטוס",
  "מצב",
  "משתמשים",
  "משתמש מוביל",
  "צוות הפרויקט",
  "לקוח הפרויקט",
];

/* eslint-disable no-lone-blocks */
// name: { type: Strin
// status: { type: Str
// situation: { type:
// users: { type: Stri
// topUser: { type: St
// projectDescription:
// projectTeam: { type
// projectClient: { ty

const EditProjectPage = ({
  projectId,
  onEnterEditProject,
  onRefreshingforProject,
  dataProject,
}: IProps) => {
  const [name, setName] = useState<string | undefined>(dataProject?.name);
  const [status, setStatus] = useState<string | undefined>(dataProject?.status);
  const [situation, setSituation] = useState<string | undefined>(
    dataProject?.situation
  );
  const [users, setUsers] = useState<string | undefined>(dataProject?.users);
  const [topUser, setTopUser] = useState<string | undefined>(
    dataProject?.topUser
  );
  const [projectDescription, setProjectDescription] = useState<
    string | undefined
  >(dataProject?.projectDescription);
  const [projectTeam, setProjectTeam] = useState<string | undefined>(
    dataProject?.projectTeam
  );
  const [projectClient, setProjectClient] = useState<string | undefined>(
    dataProject?.projectClient
  );

  const DataAditProject = {
    name,
    status,
    situation,
    users,
    topUser,
    projectDescription,
    projectTeam,
    projectClient,
  };

  const postNewProject = (event: any) => {
    event.preventDefault();
    axios
      .put("http://localhost:3001/editProject", {
        projectId: projectId,
        DataAditProject,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
      onRefreshingforProject(true)
    onEnterEditProject(false);
  };

  return (
    <>
      <form onSubmit={postNewProject}>
        <Card sx={{ p: 2, mt: 10, background: "#b0b0b0a1",
 display: "flex",
 flexDirection: "column",
 alignItems: "center" }}>
          <TextField
          value={name}
            style={{ padding: 5 }}
            label={"שם"}
            variant="outlined"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
            size={"small"}
            type="text"
          />
          <TextField
          value={status}
            style={{ padding: 5 }}
            label={"סטטוס"}
            variant="outlined"
            required
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            size={"small"}
            type="text"
          />
          <TextField
          value={situation}
            style={{ padding: 5 }}
            label={"מצב"}
            variant="outlined"
            required
            onChange={(e) => {
              setSituation(e.target.value);
            }}
            size={"small"}
            type="text"
          />{" "}
          <TextField
          value={users}
            style={{ padding: 5 }}
            label={"משתמשים"}
            variant="outlined"
            required
            onChange={(e) => {
              setUsers(e.target.value);
            }}
            size={"small"}
            type="text"
          />
          <TextField
          value={topUser}
            style={{ padding: 5 }}
            label={"משתמש מוביל"}
            variant="outlined"
            required
            onChange={(e) => {
              setTopUser(e.target.value);
            }}
            size={"small"}
            type="text"
          />
          <TextField
          value={projectTeam}
            style={{ padding: 5 }}
            label={"צוות הפרויקט"}
            variant="outlined"
            required
            onChange={(e) => {
              setProjectTeam(e.target.value);
            }}
            size={"small"}
            type="text"
          />
          <TextField
          value={projectClient}
            style={{ padding: 5 }}
            label={"לקוח הפרויקט"}
            variant="outlined"
            required
            onChange={(e) => {
              setProjectClient(e.target.value);
            }}
            size={"small"}
            type="text"
          />
          <br />
          <TextareaAutosize
            required
            value={projectDescription}
            aria-label="maximum height"
            placeholder={"תיאור הפרויקט..."}
            style={{ width: 500, height: 150 }}
            onChange={(e) => {
              setProjectDescription(e.target.value);
            }}
          />
          <br />
          <Button
            type="submit"
            variant="outlined"
            sx={{ width: 150, boxShadow: 2, mt: 3 }}
            // onClick={() => {
            //   console.log(DataNewProject);
            // }}
          >
            {"שליחה >"}
          </Button>
        </Card>
      </form>
    </>
  );
};

export default EditProjectPage;
