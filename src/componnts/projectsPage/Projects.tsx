import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Toolbar, Typography } from "@mui/material";
import {  useNavigate } from "react-router-dom";
interface IDtat {
  data: IProps[] | undefined;
  onId:(id:string)=> void
}
interface IProps {
  _id: string;
  name: string;
  status: string;
  situation: string;
}

const Projects = ({ data,onId }: IDtat) => {
  const navigte =useNavigate()
  return (
    <>
      <Box
        style={{ background: "#e6e6e6" }}
        sx={{
          absolute: "flex",
          mt: 10,
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
              <Button onClick={()=>{  
             onId(item._id)             
              navigte("/project")
            }}>
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
              </Button>
            </Toolbar>

          );
        })}
      </Box>
    </>
  );
};
export default Projects;
