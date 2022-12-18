import * as React from "react";
import Box from "@mui/material/Box";
import { Toolbar, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import EditTaskPage from "./editTaskPage";
import dayjs, { Dayjs } from "dayjs";

interface ITask {
  _id: string;
  projectId: string;
  taskDescription: string;
  startDate: Dayjs;
  endDate: Dayjs;
  taskTag: string;
  taskStatus: string;
}
interface IProps {
  taskData: ITask;
  onTaskStatus: (enter: string) => void;
  onRefreshingToTask: (ref: boolean) => void;
}

const Task = ({ taskData, onTaskStatus, onRefreshingToTask }: IProps) => {
  const [enterToEditTask, setEnterToEditTask] = React.useState<boolean>();
  const [refreshingToTask, setRefreshingToTask] =
    React.useState<boolean>(false);

  return (
    <>
      <Card
        classes
        sx={{
          mt: 5,
          background: "#b0b0b0a1",
          width: {
            xs: "100%", //0
            sm: "100%", //600
            md: "60%", //900
            lg: "60%", //1200
            xl: "60%", //1536
          },
        }}
      >
        <CardContent>
          {/* <Box style={{width:150}}> */}
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            {`תיאור המשימה:${taskData.taskDescription}`}
            <br />
            {`תאריך התחלה:${dayjs(taskData.startDate).format('DD/MM/YYYY')} `}
            {`תאריך סיום:${dayjs(taskData.endDate).format('DD/MM/YYYY')}`}
            <br />
            {`סטטוס משימה:${taskData.taskStatus} `}
            <br />
            {`תג משימה:${taskData.taskTag}`}
            {/* כאן צריך להוסיף את הנספחים*/}
          </Typography>
          {/* </Box> */}
          <Button
            size="small"
            onClick={() => {
              setEnterToEditTask(true);
            }}
          >
            {"עריכת משימה"}
          </Button>
        </CardContent>
        {enterToEditTask && (
          <>
            {/* {onTaskStatus("פעיל")} */}
            <EditTaskPage
              taskData={taskData}
              onRefreshing={setRefreshingToTask}
            />
            {onRefreshingToTask(refreshingToTask)}
          </>
        )}
      </Card>
    </>
  );
};
export default Task;
