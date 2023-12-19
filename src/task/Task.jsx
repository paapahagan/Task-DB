import { TaskDiv, TaskItem } from "../components/Div/Div.styles";
import { FaTimes } from "react-icons/fa";
function Task({ task, onDelete }) {
  return (
    <TaskDiv>
      <TaskItem>
        <h4>{task.text}</h4>
        <FaTimes className="delete_icon" onClick={() => onDelete(task.id)} />
      </TaskItem>
      <p>{task.day}</p>
    </TaskDiv>
  );
}

export default Task;
