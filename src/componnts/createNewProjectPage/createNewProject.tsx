import { Button, Card, TextareaAutosize, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const a = [
  "שם",
  "סטטוס",
  "מצב",
  "משתמשים",
  "משתמש מוביל",
  "צוות הפרויקט",
  "לקוח הפרויקט",
];

const CreateNewProject = () => {
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

  const postNewProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/createNewProject", { DataNewProject })
      .then((res) => {})
      .catch((err) => console.log(err));
    navigate("/projects");
  };
  return (
    <>
      <form onSubmit={postNewProject}>
        <Card
          sx={{
            p: 2,
            mt: 10,
            background: "#b0b0b0a1",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <Stack spacing={3}> */}
          {a?.map((item) => {
            console.log();

            return (
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
