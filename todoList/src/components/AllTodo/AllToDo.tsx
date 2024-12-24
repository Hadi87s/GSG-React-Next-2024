import Item from "../TodoItem/Item";
import "./alltodo.css";

interface IProps {
  tasks: string[];
  onTrashClick: (key: number) => void;
  onCheckClick: (value: number) => void;
}
function AllTodo(props: IProps) {
  const handleTaskRemoval = (key: number) => {
    props.onTrashClick(key);
  };

  const handleTaskCompletion = (value: number) => {
    props.onCheckClick(value);
  };

  return (
    <div className="allItems">
      {props.tasks.length > 0 ? (
        props.tasks.map((task, index) => (
          <Item
            index={index}
            key={index}
            task={task}
            onTrashClick={handleTaskRemoval}
            onCheckClick={handleTaskCompletion}
          />
        ))
      ) : (
        <div className="noTasks">No tasks available</div>
      )}
    </div>
  );
}

export default AllTodo;
