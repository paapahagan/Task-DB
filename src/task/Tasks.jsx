import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import Task from "./task";
import { DivContainer } from "../components/Div/Div.styles";

function Tasks() {
  const { tasks, DeleteTodo } = useContext(TaskContext);
  return (
    <DivContainer>
      {tasks.map((task) => {
        return <Task key={task.id} task={task} onDelete={DeleteTodo} />;
      })}
    </DivContainer>
  );
}

export default Tasks;
