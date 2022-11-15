import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useState } from "react";
interface IProps {
  onData: (id: IArr[] | undefined) => void;
}
interface IArr {
  _id: string;
  name: string;
  status: string;
  situation: string;
}
const navItems = ["פרויקטים", "יצירת פרויקט"];

const HeaderBar = ({ onData }: IProps) => {
  const [projects, setProjects] = useState<IArr[]>();
  // console.log(projects);

  const getProjectData = () => {
    axios
      .get("http://localhost:3001/projectsHome")
      .then((res) => {
        setProjects(res.data);
        onData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={getProjectData}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default HeaderBar;
