import * as React from "react";
import Box from "@mui/material/Box";
import { Toolbar, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

interface ITask {
  _id: string;
  projetId: string;
  taskDescription: string;
  startDate: string;
  endDate: string;
  taskTag: string;
  taskStatus: string;
}
interface IProps {
  taskData: ITask;
}

const Task = ({ taskData }: IProps) => {

  return (
    <>
      <Card classes sx={{  mt:5, background: "#b0b0b0a1" }}>
        <CardContent >
          
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {`תיאור המשימה:${taskData.taskDescription}`}
            <br />
            {`תאריך התחלה:${taskData.startDate} `}
            {`תאריך סיום:${taskData.endDate}`}
            <br />
            {`סטטוס משימה:${taskData.taskStatus} `}
            <br/>
            {`תג משימה:${taskData.taskTag}`}
            {/* כאן צריך להוסיף את הנספחים*/}
          </Typography>
          <Button size="small">{"עריכת משימה"}</Button>
        </CardContent>
      </Card>
    </>
  );
};
export default Task;
