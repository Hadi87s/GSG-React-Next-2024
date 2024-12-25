import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Data from "./components/Data/Data";
import AllToDo from "./components/AllTodo/AllToDo";

function App() {
  const [tasks, addTask] = useState<string[]>([]);
  const [urgentTask, setUrgent] = useState<number>(0);
  const [urgentCount, setUrgentCount] = useState<number>(0);
  const [complete, setComplete] = useState<number>(0);
  const handleFormSubmit = (todoValue: string, urgent: boolean) => {
    if (urgent) {
      setUrgent(urgentTask + 1);
      setUrgentCount(urgentCount + 1);
    } else {
      setUrgent(urgentTask);
    }
    addTask([...tasks, todoValue]);
  };

  const handleItemRemoval = (key: number) => {
    complete > 0 ? setComplete(complete - 1) : null;
    let newTasksList = tasks.filter((_, index) => index != key);
    if (urgentCount > 0) {
      setUrgent(urgentTask - 1);
      setUrgentCount(urgentCount - 1);
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
