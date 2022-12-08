import {
  Button,
  Card,
  Divider,
  Grid,
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
import "dayjs/locale/en";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
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
  const locales = ["en"] as const;
  const [locale, setLocale] = useState<typeof locales[number]>("en");
  const [startDate, setStartDate] = useState<Date | null | string>(
    taskData.startDate
  );
  console.log(startDate);

  const [endDate, setEndDate] = useState<Dayjs | null | string>(
    dayjs(taskData.endDate)
  );
  console.log(endDate);

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
            <Card classes sx={{ p: 1, background: "#b0b0b0a1" }}>
              {/* <UnstyledInputBasic /> */}
              <TextareaAutosize
                required
                value={taskDescription}
                aria-label="maximum height"
                placeholder={"תיאור משימה..."}
                style={{ width: "100%", height: 150 ,background:"#b0b0b0a1", borderRadius: "15px",fontFamily: "Arial"}}

                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
              />
              <Grid
                container
              direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
              >
                 <Grid item >
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale={locale}
                >
                  <DatePicker
                    label={"תאריך התחלה"}
                    value={startDate}
                    onChange={(newValue) =>
                      setStartDate(dayjs(newValue).format("DD/MM/YYYY"))
                    }
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                </Grid>
                <Grid item >

                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale={locale}
                >
                  <DatePicker
                    label={"תאירך סיום"}
                    value={endDate}
                    onChange={(newValue) =>
                      setEndDate(dayjs(newValue).format("DD/MM/YYYY"))
                    }
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                </Grid>
                <Grid item >

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
                </Grid>

              <Button
                type="submit"
                variant="outlined"
                sx={{  width:"80%",boxShadow: 2, mt:1}}
                fullWidth
              >
                {"שליחה"}
              </Button>
              </Grid>

            </Card>
          </form>
        </>
      )}
    </>
  );
};
export default EditTaskPage;
