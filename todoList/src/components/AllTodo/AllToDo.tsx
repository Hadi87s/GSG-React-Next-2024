import Item from "../TodoItem/Item";
import "./alltodo.css";

interface IProps {
  tasks: string[];
  onTrashClick: (key: number) => void;
}
function AllTodo(props: IProps) {
  const handleTaskRemoval = (key: number) => {
    props.onTrashClick(key);
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
          />
        ))
      ) : (
        <div style={{ color: "#dd4521", fontWeight: "500" }}>
          No tasks available
        </div>
      )}
    </div>
  );
}

export default AllTodo;
