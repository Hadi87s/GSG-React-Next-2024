import "./data.css";
interface IData {
  taskCount: number;
  urgent: number;
  complete: number;
}
function Data(props: IData) {
  return (
    <div className="tasks">
      <div className="createdTasks">
        <h4>{props.taskCount}</h4>
        <p>Created</p>
      </div>
      <div className="completedTasks">
        <h4>{props.complete}</h4>
        <p>Completed</p>
      </div>
      <div className="UrgentTasks">
        <h4>{props.urgent}</h4>
        <p>Urgent</p>
      </div>
    </div>
  );
}

export default Data;
