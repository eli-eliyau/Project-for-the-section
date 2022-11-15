import { Button, Card, Divider, TextField } from "@mui/material";
import { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Stack } from "@mui/system";
import axios from "axios";
// import UnstyledInputBasic from "./s";

interface Iprops {
  idProject: string | undefined;
}

const NewTask = ({idProject}:Iprops) => {
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [taskDescription, setTaskDescription] = useState<string>();
console.log(idProject);

  const postNewTask=(event:any)=>{
    event.preventDefault(); 
    axios.post('http://localhost:3001/createNewTask',{projetId:idProject,taskDescription:taskDescription,startDate:startDate,endDate:endDate}).then((res)=>{console.log(res.data)
    }).catch((err)=>console.log(err)
    )
    
  }

  return (
    <>
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
            <TextField
              label="תאריך התחלה"
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

            <Button
              type="submit"
              variant="outlined"
              sx={{ width: 150, boxShadow: 2, mt: 3 }}
              // onSubmit={() => {}}
            >
              {"שליחה >"}
            </Button>
          </Stack>
        </Stack>
        
      </Card>
      </form>
    </>
  );
};
export default NewTask;
