import { Trash2 } from "lucide-react";
import "./item.css";

interface IProps {
  index: number;
  task: string;
  onTrashClick: (key: number) => void;
}

function Item(props: IProps) {
  return (
    <div className="item">
      <label>
        <input
          type="checkbox"
          className="input"
          onChange={(e) => {
            e.currentTarget.parentElement?.nextElementSibling?.classList.toggle(
              "checked"
            );
          }}
        />
        <span className="custom-checkbox"></span>
      </label>
      <p>{props.task}</p>
      <button onClick={() => props.onTrashClick(props.index)}>
        <Trash2 />
      </button>
    </div>
  );
}
export default Item;
