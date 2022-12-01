import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

interface ITask {
  _id: string;
  projectId: string;
  taskDescription: string;
  startDate: string;
  endDate: string;
  taskTag: string;
  taskStatus: string;
}
interface IProps {
  task: ITask[] | undefined;
}
const Api = ({ task }: IProps) => {
  const numberPercent = (task: ITask[]) => {
    let amountTask: number = 0;
    let counter: number = 0;

    if (task?.length) {
      amountTask = task.length;
    }

    for (const key in task) {
      if (task[key].taskStatus === "פעיל") {
        counter++;
      }
    }
    if (counter === 0) return 100;
    else 

    return Math.floor((amountTask - counter) * (100 / amountTask));
  };

  let dataUrl = {
    type: "progressBar",
    data: {
      datasets: [
        {
          data: [`${task && numberPercent(task)}`],
        },
      ],
    },
  };
  return (
    <>
    <Box
  sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
>
    <Box>
      <Typography
        sx={{
          fontSize: 26,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        color="text.secondary"
        gutterBottom
      >
        {"משימות שבוצעו:"}
      </Typography>
      {task && (
        <iframe
          src={`https://quickchart.io/chart?w=300&h=40&c=${JSON.stringify(
            dataUrl
          )}`}
          style={{ border: "0", width: 600, height: 80 }}
          title="Iframe Example"
        ></iframe>
      )}
      </Box>
      </Box>
    </>
  );
};
export default Api;
