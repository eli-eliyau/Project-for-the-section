import { Button, Card, Divider, TextField } from "@mui/material";
import { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Stack } from "@mui/system";
import axios from "axios";
// import UnstyledInputBasic from "./s";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/fr";

interface IProps {
  projectId: string | undefined;
  onEnterNewTask: (enter: boolean) => void;
  onRefreshing: (ref: boolean) => void;
}

const NewTask = ({ projectId, onEnterNewTask, onRefreshing }: IProps) => {
  const [taskDescription, setTaskDescription] = useState<string>();

  //קשור לתאריך מאיזה פורמט יהיה

  const [locale, setLocale] = useState<typeof locales[number]>("fr");
  const locales = ["fr"] as const;
  const [startDate1, setStartDate1] = useState<Dayjs | null | string>(dayjs());
  const [startDate, setStartDate] = useState<Dayjs | null | string>(
    dayjs().format("DD/MM/YYYY")
  );
  
  const [endDate, setEndDate] = useState<Dayjs | null | string>(
    dayjs().format("DD/MM/YYYY")
  );
  const [endDate1, setEndDate1] = useState<Dayjs | null | string>(dayjs());

  const postNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/createNewTask", {
        projectId: projectId,
        taskDescription: taskDescription,
        startDate: startDate,
        endDate: endDate,
      })
      .then((res) => {})
      .catch((err) => console.log(err));
    onRefreshing(true);
    onEnterNewTask(false);
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
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale={locale}
            >
              <DatePicker
                label="תאריך התחלה"
                value={startDate1}
                onChange={(newValue) => {
                  setStartDate1(newValue);
                  setStartDate(dayjs(newValue).format("DD/MM/YYYY"));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              adapterLocale={locale}
            >
              <DatePicker
                label="תאריך סיום"
                value={endDate1}
                onChange={(newValue) => {
                  setEndDate1(newValue);
                  setEndDate(dayjs(newValue).format("DD/MM/YYYY"));
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
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
