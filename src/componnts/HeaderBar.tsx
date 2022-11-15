import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
interface IProps {
  onData: (id: IArr[] | undefined) => void;
  refreshingforProjects: string |undefined;
}
interface IArr {
  _id: string;
  name: string;
  status: string;
  situation: string;
}

const HeaderBar = ({ onData, refreshingforProjects }: IProps) => {
  const [projects, setProjects] = useState<IArr[]>();
  const [getProjectData, setGetProjectData] = useState<Boolean>(false);
  const [g, setG] = useState<string |undefined>(refreshingforProjects);
    
console.log(g);

  const navigte = useNavigate();
  useEffect(() => {
    //מביא את הפרויקטים לדף הבית
    axios
      .get("http://localhost:3001/projectsHome")
      .then((res) => {
        setProjects(res.data);
        onData(res.data);
        setGetProjectData(false)
        // setG(false)
      })
      .catch((err) => {
        console.log(err);
      });

  }, [getProjectData ||g]);

  return (
    <>
      <Box>
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              {"מדור מערכות מידע"}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                sx={{ color: "#fff" }}
                onClick={() => {
                  setGetProjectData(true);
                  navigte("/projects");
                }}
              >
                {/* {item} */}
                {"פרויקטים"}
              </Button>
              <Button
                // key={item}
                sx={{ color: "#fff" }}
                onClick={() => {
                  navigte("/create-new-project");
                }}
              >
                {/* {item} */}
                {"יצירת פרויקט"}
              </Button>

              {/* ))} */}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default HeaderBar;
