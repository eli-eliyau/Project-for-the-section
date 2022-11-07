import * as React from "react";
import Paper from "@mui/material/Paper";
import {  Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

interface IProps {
  name?: string;
  status?: string;
  situation?: string;
}

const Projects = ({ name, status, situation }: IProps) => {
  const [nameP, set] = useState(name);
  const [statusP, setS] = useState(status);
  const [situationP, setT] = useState(situation);
  return (
    <main>
      <Link to={"/project"}>
        <Paper elevation={3}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {`שם:${nameP}`}
            <br />
            {`סטטוס:${statusP}`}
            <br />
            {`מצב:${situationP}`}
          </Typography>
        </Paper>
      </Link>
    </main>
  );
};
export default Projects;
