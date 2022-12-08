import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Toolbar } from "@mui/material";
import img from "../imgs/images.png";

interface IProps {
  onData: (id: IArr[] | undefined) => void;
}
interface IArr {
  _id: string;
  name: string;
  status: string;
  situation: string;
}

const HeaderBar = ({ onData }: IProps) => {
  const [projects, setProjects] = useState<IArr[]>();
  const [getProjectData, setGetProjectData] = useState<Boolean>(false);

  const navigte = useNavigate();
  useEffect(() => {
    //מביא את הפרויקטים לדף הבית
    axios
      .get("http://localhost:3001/projectsHome")
      .then((res) => {
        setProjects(res.data);
        onData(res.data);
        setGetProjectData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [getProjectData]);

  return (
    <>
      <AppBar component="nav" sx={{ height: 50, background: "#0066ff" }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Typography variant="h5" component="div" sx={{ m: 1 }}>
            {"ניהול פרויקטים"}
          </Typography>

          <Box>
            <Button
              sx={{ color: "#fff", m: 0.5 }}
              onClick={() => {
                setGetProjectData(true);
                navigte("/projects");
              }}
            >
              {"פרויקטים"}
            </Button>
            <Button
              // key={item}
              sx={{ color: "#fff", m: 0.5 }}
              onClick={() => {
                navigte("/create-new-project");
              }}
            >
              {"יצירת פרויקט"}
            </Button>
          </Box>
        </Grid>
      </AppBar>
    </>
  );
};
export default HeaderBar;
