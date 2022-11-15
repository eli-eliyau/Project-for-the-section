import {
  Button,
  Card,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextareaAutosize,
  TextField,
  Toolbar,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./TaskFoProject";

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
  taskData: ITask;
  onRefreshing:(ref: boolean) => void;
}

const EditTaskPage = ({ taskData,onRefreshing}: IProps) => {
  const [taskDescription, setTaskDescription] = useState<string>(taskData.taskDescription);
  const [startDate, setStartDate] = useState<string>(taskData.startDate);
  const [endDate, setEndDate] = useState<string>(taskData.endDate);
  const [taskStatus, setTaskStatus] = useState<string>(taskData.taskStatus);
  const [enter, setEnter] = useState<boolean>(true);

  const handleChange = (event: SelectChangeEvent) => {
    setTaskStatus(event.target.value as string);
  };

  const putEditTask = (event: any) => {
    event.preventDefault();
    //בקשה לעדכן את המשימה
    axios
      .put("http://localhost:3001/editTask", {
        _id: taskData._id,
        taskDescription: taskDescription,
        startDate: startDate,
        endDate: endDate,
        taskStatus: taskStatus,
      })
      .then((res) => {})
      .catch((err) => console.log(err));
      setEnter(false);
      onRefreshing(true)
   
  };
  return (
    <>
      {enter && (
        <>
          <form onSubmit={putEditTask}>
            <Card classes sx={{ p: 2, mt: 5, background: "#b0b0b0a1" }}>
              <Stack spacing={3}>
                {/* <UnstyledInputBasic /> */}
                <TextareaAutosize
                  required
                  value={taskDescription}
                  aria-label="maximum height"
                  placeholder={"תיאור משימה..."}
                  style={{ width: 500, height: 150 }}
                  onChange={(e) => {
                    setTaskDescription(e.target.value);
                  }}
                />
                <Stack
                  direction="row"
                  spacing={2}
                  divider={<Divider orientation="vertical" />}
                >
                  <TextField
                    label="תאריך התחלה"
                    value={startDate}
                    variant="outlined"
                    required
                    // value={startDate}
                    // error={!a}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                    size={"small"}
                    type="text"
                    // helperText={!a && "הכנס תיאור"}
                  />
                  <TextField
                    label="תאריך סיום"
                    value={endDate}
                    variant="outlined"
                    required
                    // value={andDate}
                    // error={!a}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                    }}
                    size={"small"}
                    type="text"
                    // helperText={!a && "הכנס תיאור"}
                  />
                  <Select
                    required
                    label="סטטוס משימה"
                    value={taskStatus}
                    style={{ width: 100 }}
                    size={"small"}
                    // labelId="demo-simple-select-label"
                    //   id="demo-simple-select"
                    onChange={handleChange}
                  >
                    <MenuItem value={"פעיל"}>{"פעיל"}</MenuItem>
                    <MenuItem value={"לא פעיל"}>{"לא פעיל"}</MenuItem>
                  </Select>
                </Stack>
              </Stack>
              <Button
                type="submit"
                variant="outlined"
                sx={{ width: 150, boxShadow: 2, mt: 3 }}
              >
                {"שליחה >"}
              </Button>
            </Card>
          </form>
        </>
      )}
    </>
  );
};
export default EditTaskPage;
