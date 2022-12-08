import * as React from "react";
import Paper from "@mui/material/Paper";
import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { url } from "inspector";
interface IDtat {
  data: IProps[] | undefined;
  onId: (id: string) => void;
}
interface IProps {
  _id: string;
  name: string;
  status: string;
  situation: string;
}

const Projects = ({ data, onId }: IDtat) => {
  const navigte = useNavigate();
  return (
    <div style={{background:"#b0b0b0a1"}}>
      <>
        <Typography variant="h4" align="center" sx={{mt:8}} style={{  fontWeight: "bold"}}>{`הפרויקטים שלך`}</Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ mt: 8 }}
        >
          {data?.map((item) => {
            return (
              <Button
                // style={{ marginRight: 10 }}
                onClick={() => {
                  onId(item._id);

                  navigte("/project");
                }}
              >
                <Paper elevation={10}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ width: 150, height: 150 }}
                  >
                    <Typography variant="h4">{`${item.name}`}</Typography>

                    {`סטטוס:${item.status}`}
                    <br />
                    {`מצב:${item.situation}`}
                  </Typography>
                </Paper>
              </Button>
            );
          })}
        </Grid>
      </>
    </div>
  );
};
export default Projects;
