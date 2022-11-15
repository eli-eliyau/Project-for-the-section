/* eslint-disable no-lone-blocks */
// name: { type: Strin
// status: { type: Str
// situation: { type:
// users: { type: Stri
// topUser: { type: St
// projectDescription:
// projectTeam: { type
// projectClient: { ty

import { Button, Card, TextareaAutosize, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  onRefreshingforProjects: (ref: string) => void;
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
const CreateNewProject = ({ onRefreshingforProjects }: IProps) => {
  const [name, setName] = useState<string>();
  const [status, setStatus] = useState<string>();
  const [situation, setSituation] = useState<string>();
  const [users, setUsers] = useState<string>();
  const [topUser, setTopUser] = useState<string>();
  const [projectDescription, setProjectDescription] = useState<string>();
  const [projectTeam, setProjectTeam] = useState<string>();
  const [projectClient, setProjectClient] = useState<string>();

  const navigate = useNavigate();
  const DataNewProject = {
    name,
    status,
    situation,
    users,
    topUser,
    projectDescription,
    projectTeam,
    projectClient,
  };
  const ref="1"
  const postNewProject = (event: any) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/createNewProject", { DataNewProject })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
      console.log(ref);

    onRefreshingforProjects(ref);
    console.log(ref);

    navigate("/projects");
  };
  return (
    <>
      <form onSubmit={postNewProject}>
        <Card sx={{ p: 2, mt: 10, background: "#b0b0b0a1" }}>
          {/* <Stack spacing={3}> */}
          {a?.map((item) => {
            console.log();

            return (
              // <Stack
              //   direction="row"
              //   spacing={2}
              //   divider={<Divider orientation="vertical" />}
              // >
              <TextField
                style={{ padding: 5 }}
                label={item}
                variant="outlined"
                required
                // value={}
                // error={!a}
                onChange={(e) => {
                  {
                    item === "שם" && setName(e.target.value);
                  }
                  {
                    item === "סטטוס" && setStatus(e.target.value);
                  }
                  {
                    item === "מצב" && setSituation(e.target.value);
                  }
                  {
                    item === "משתמשים" && setUsers(e.target.value);
                  }
                  {
                    item === "משתמש מוביל" && setTopUser(e.target.value);
                  }
                  {
                    item === "צוות הפרויקט" && setProjectTeam(e.target.value);
                  }
                  {
                    item === "לקוח הפרויקט" && setProjectClient(e.target.value);
                  }
                }}
                size={"small"}
                type="text"
                // helperText={!a && "הכנס תיאור"}
              />
            );
          })}
          <br />
          <TextareaAutosize
            required
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
          >
            {"שליחה >"}
          </Button>
        </Card>
      </form>
    </>
  );
};
export default CreateNewProject;
