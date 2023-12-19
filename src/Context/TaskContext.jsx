import { createContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const TaskContext = createContext();

function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

  //add Task
  const addTask = (task) => {
    const newTask = {
      id: tasks.length + 1,
      ...task,
    };
    setTasks([...tasks, newTask]);
    console.log(newTask);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setText("");
    setDay("");
    setReminder(false);
  };

  // delete task
  const DeleteTodo = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    setTasks(newTask);
    console.log(newTask);
  };

  // save to firestore

  const db = getFirestore();

  const saveDataToFirestore = async () => {
    const docRef = await addDoc(collection(db, "my collection"), {
      field1: text,
      field2: day,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        text,
        setText,
        day,
        setDay,
        reminder,
        setReminder,
        onSubmit,
        DeleteTodo,
        showAddTask,
        setShowAddTask,
        saveDataToFirestore,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
