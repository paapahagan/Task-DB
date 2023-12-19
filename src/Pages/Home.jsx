import { useContext } from "react";
import {
  DivContainer,
  FormDiv,
  Reminder,
  ReminderContainer,
} from "../components/Div/Div.styles";
import { AddTaskButton } from "../components/button/Button.styles";
import { FormInput } from "../components/input/Input.styles";
import Tasks from "../task/Tasks";
import Header from "./Header";
import { TaskContext } from "../Context/TaskContext";

function Home() {
  const {
    addTask,
    text,
    setText,
    day,
    setDay,
    reminder,
    setReminder,
    onSubmit,
    saveDataToFirestore,
    // showAddTask,
    // setShowAddTask,
  } = useContext(TaskContext);
  return (
    <DivContainer>
      <Header />
      <FormDiv className="task_form" onSubmit={onSubmit}>
        <DivContainer>
          <label>Task</label>
          <FormInput
            placeholder="Enter Task "
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </DivContainer>
        <DivContainer>
          <label className="">Day & Time</label>
          <FormInput
            placeholder="Add Day & Time "
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </DivContainer>
        <ReminderContainer>
          <Reminder>
            <label className=" ">Set Reminder</label>
            <input
              type="checkbox"
              className="check"
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            />
          </Reminder>
          <div>
            <AddTaskButton
              variant="outline"
              onClick={() => saveDataToFirestore({ text, day, reminder })}
            >
              Add Task
            </AddTaskButton>
          </div>
        </ReminderContainer>
      </FormDiv>
      <FormDiv>
        <h3>Your Tasks</h3>
        <Tasks />
      </FormDiv>
    </DivContainer>
  );
}

export default Home;
