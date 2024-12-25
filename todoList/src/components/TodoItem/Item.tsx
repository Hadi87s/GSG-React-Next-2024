import { Trash2 } from "lucide-react";
import "./item.css";
import IType from "../../types/IType";

interface IProps {
  index: number;
  task: IType;
  onTrashClick: (key: number) => void;
  onCheckClick: (value: number) => void;
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
            e.currentTarget.checked
              ? props.onCheckClick(+1)
              : props.onCheckClick(-1);
          }}
        />
        <span className="custom-checkbox"></span>
      </label>
      <p style={{ color: props.task.urgent ? "orange" : "initial" }}>
        {props.task.value}
      </p>
      <button onClick={() => props.onTrashClick(props.index)}>
        <Trash2 />
      </button>
    </div>
  );
}
export default Item;
