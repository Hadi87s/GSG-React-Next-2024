import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Data from "./components/Data/Data";
import AllToDo from "./components/AllTodo/AllToDo";

function App() {
  const [tasks, addTask] = useState<string[]>([]);
  const [urgentTask, setUrgent] = useState<number>(0);
  const [urgentCount, setUrgentCount] = useState<number>(0);

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
    let newTasksList = tasks.filter((_, index) => index != key);
    if (urgentCount > 0) {
      setUrgent(urgentTask - 1);
      setUrgentCount(urgentCount - 1);
    }
    addTask(newTasksList);
  };

  return (
    <div className="container">
      <Form onFormSubmit={handleFormSubmit}></Form>
      <Data taskCount={tasks.length} urgent={urgentTask}></Data>
      <AllToDo tasks={tasks} onTrashClick={handleItemRemoval} />
    </div>
  );
}

export default App;
