import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
interface IDtat {
  data: IProps[] | undefined;
}
interface IProps {
  id: string;
  name: string;
  status: string;
  situation: string;
}

const Projects = ({ data }: IDtat) => {
  return (
    <>
      <Box
        style={{ background: "#e6e6e6" }}
        sx={{
          absolute: "flex",
          p: 10,
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            width: 128,
            height: 128,
          },
        }}
      >
        {data?.map((item) => {
          return (
            <Toolbar>
              <Link to="/project">
                <Paper elevation={10}>
                  <Toolbar>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                    >
                      {`שם:${item.name}`}
                      <br />
                      {`סטטוס:${item.status}`}
                      <br />
                      {`מצב:${item.situation}`}
                    </Typography>
                  </Toolbar>
                </Paper>
              </Link>
            </Toolbar>
          );
        })}
      </Box>
    </>
  );
};
export default Projects;
