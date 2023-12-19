import { useContext } from "react";
import { DivContainer } from "../components/Div/Div.styles";
import Header from "./Header";
import Home from "./Home";
import Task from "../task/task";
import { TaskContext } from "../Context/TaskContext";

function Todo() {
  const { showAddTask, setShowAddTask, addTask, DeleteTodo, tasks } =
    useContext(TaskContext);
  return (
    <DivContainer>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <Home onAdd={addTask} />}

      {tasks.length > 0 ? <Task onDelete={DeleteTodo} /> : "no task"}
    </DivContainer>
  );
}

export default Todo;
