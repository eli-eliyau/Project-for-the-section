import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

interface IProps {
  data: IDtat[] | undefined;
  userName?:string
  onId: (id: string) => void;
}
interface IDtat {
  _id: string;
  name: string;
  status: string;
  situation: string;
}

const P = ({ data ,userName,onId}: IProps) => {
  const navigte = useNavigate();
  return (
    <>
      {/* End hero unit */}
<Typography variant="h3" sx={{mt:6}}>{userName ? `ברוך הבא  ${userName}` : "ברוך הבא"}</Typography>
      <Grid
        item
        sx={{ mt: 8 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {data?.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid
            item
            sx={{ mt: 3 }}
            key={tier.name}
            xs={12}
            sm={8}
            //   sm={tier.title === "Enterprise" ? 12 : 6}
            md={4}
          >
            <Card>
              <CardHeader
                title={<Typography variant="h3" align="center"><StarIcon />{`${tier.name}`}</Typography>}
                // subheader={tier.name}
                titleTypographyProps={{ align: "center" }}
                //   action={tier.title === "Pro" ? <StarIcon /> : null}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                   

                  }}
                >
                  <Typography component="h2" variant="h5" color="text.primary" >
                  {`סטטוס - ${tier.status}`}
                  </Typography>
                  <Typography variant="h5" color="text.primary" sx={{mr:5}}>
                    {`מצב - ${tier.situation}`}
                  </Typography>
                </Box>
                <ul>
                  {/* {tier.description.map((line) => ( */}
                  {/* <Typography */}
                  {/* component="li" */}
                  {/* variant="subtitle1" */}
                  {/* align="center" */}
                  {/* key={line} */}
                  {/* > */}
                  {/* {line} */}
                  {/* </Typography> */}
                  {/* ))} */}
                </ul>
              </CardContent>
              <CardActions
                sx={{
                  direction: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  sx={{
                    width: {
                      xs: "100%", //0
                      sm: "50%", //600
                      md: "50%", //900
                      lg: "50%", //1200
                      xl: "50%", //1536
                    },
                  }}
                  variant={"contained"}
                  onClick={()=>{
                    onId(tier._id);
                    navigte("/project");

                  }}
                >
                  {"כניסה לפרויקט"}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default P;
