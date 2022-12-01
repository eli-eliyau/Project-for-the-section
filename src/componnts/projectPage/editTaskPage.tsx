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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/es-us";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import { useEffect, useState } from "react";
import Task from "./TaskFoProject";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import relativeTime from "dayjs/plugin/relativeTime";
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
  onRefreshing: (ref: boolean) => void;
}

const EditTaskPage = ({ taskData, onRefreshing }: IProps) => {
  const [taskDescription, setTaskDescription] = useState<string>(
    taskData.taskDescription
  );
  const [taskStatus, setTaskStatus] = useState<string>(taskData.taskStatus);
  const [enter, setEnter] = useState<boolean>(true);
  //קשור לתאריך מאיזה פורמט יהיה
  const [locale, setLocale] = useState<typeof locales[number]>("es-us");
  const locales = ["es-us"] as const;
  const [startDate, setStartDate] = useState<Dayjs | null | string>(
    taskData.startDate
  );
  const [endDate, setEndDate] = useState<Dayjs | null | string>(
    taskData.endDate
  );

  const handleChange = (event: SelectChangeEvent) => {
    setTaskStatus(event.target.value as string);
  };

  const putEditTask = (event: React.FormEvent<HTMLFormElement>) => {
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
    onRefreshing(true);
  };
  // dayjs.extend(relativeTime)

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
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale={locale}
                  >
                    <DatePicker
                      label={"תאריך התחלה"}
                      value={startDate}
                      onChange={(newValue) => setStartDate(dayjs(newValue).format('DD/MM/YYYY'))}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    adapterLocale={locale}
                  >
                    <DatePicker
                      label={"תאירך סיום"}
                      value={endDate}
                      onChange={(newValue) => setEndDate(dayjs(newValue).format('DD/MM/YYYY'))}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
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
