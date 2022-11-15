import { Button, Card, Divider, TextField } from "@mui/material";
import { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Stack } from "@mui/system";
import axios from "axios";
// import UnstyledInputBasic from "./s";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
interface IProps {
  projectId: string | undefined;
  onEnterNewTask:(enter:boolean)=>void
  onRefreshing:(ref:boolean)=> void
}

const NewTask = ({ projectId ,onEnterNewTask,onRefreshing}: IProps) => {

  const [startDate, setStartDate] = useState<Dayjs | null>();
  const [endDate, setEndDate] = useState<string>();
  const [taskDescription, setTaskDescription] = useState<string>();
    
  const postNewTask = (event: any) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/createNewTask", {
        projectId: projectId,
        taskDescription: taskDescription,
        startDate: startDate,
        endDate: endDate,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    onRefreshing(true)
      onEnterNewTask(false)
  };
  return (
      <form onSubmit={postNewTask}>
        <Card classes sx={{ p: 2, mt: 5, background: "#b0b0b0a1" }}>
          <Stack spacing={3}>
            {/* <UnstyledInputBasic /> */}
            <TextareaAutosize
              required
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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="תאריך התחלה"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <TextField
                label="תאריך סיום"
                variant="outlined"
                required
                // value={andDate}
                // error={!a}
                onChange={(e) => {
                  setEndDate(e.target.value);
                }}
                size={"small"}
                type="text"
              />
              <Button
                type="submit"
                variant="outlined"
                sx={{ width: 150, boxShadow: 2, mt: 3 }}
              >
                {"שליחה >"}
              </Button>
            </Stack>
          </Stack>
        </Card>
      </form>
  );
};
export default NewTask;
