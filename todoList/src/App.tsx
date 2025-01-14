import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Data from "./components/Data/Data";
import AllToDo from "./components/AllTodo/AllToDo";
import IType from "./types/IType";

function App() {
  const [tasks, addTask] = useState<IType[]>([]); //array of objects
  const [urgentTask, setUrgent] = useState<number>(0);
  const [complete, setComplete] = useState<number>(0);

  useEffect(() => {
    addTask(JSON.parse(localStorage.getItem("tasks") || ""));
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleFormSubmit = (object: IType) => {
    if (object.urgent) {
      setUrgent(urgentTask + 1);
    } else {
      setUrgent(urgentTask);
    }
    addTask([...tasks, object]);
  };

  const handleItemRemoval = (key: number) => {
    complete > 0 ? setComplete(complete - 1) : null;
    let newTasksList = tasks.filter((_, index) => index != key);
    if (tasks[key].urgent) {
      setUrgent(urgentTask - 1);
    }
    addTask(newTasksList);
  };

  const handleCheckClick = (value: number) => {
    setComplete(complete + value);
  };

  const dateString = new Date().toString();
  const parts = dateString.split(" ");
  const day = parts[0];
  const date = parts[2];
  const month = parts[1];
  const formattedDate = `${day}, ${date} ${month}`;

  return (
    <div className="container">
      <div className="time"> {formattedDate}</div>
      <Form onFormSubmit={handleFormSubmit}></Form>
      <Data
        taskCount={tasks.length}
        urgent={urgentTask}
        complete={complete}
      ></Data>
      <AllToDo
        tasks={tasks}
        onTrashClick={handleItemRemoval}
        onCheckClick={handleCheckClick}
      />
    </div>
  );
}

export default App;
