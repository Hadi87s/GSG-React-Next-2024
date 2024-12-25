import { useState } from "react";
import "./form.css";

interface IProps {
  onFormSubmit: (value: string, urgent: boolean) => void;
}

function Form(props: IProps) {
  const [urgent, setUrgent] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  return (
    <div className="todo-form">
      {" "}
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          props.onFormSubmit(value, urgent);
        }}
      >
        <input
          type="text"
          placeholder="Type Todo here..."
          name="todo-input"
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
        />
        <input type="submit" value={"Add Todo"} />
        <div>
          <label className="checkbox-wrapper">
            <input
              type="checkbox"
              name="urgent"
              id="urgent"
              onChange={() => {
                setUrgent(!urgent);
                console.log(urgent);
              }}
            />
            <div className="checkmark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  d="M20 6L9 17L4 12"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <span className="label">Mark As Urgent</span>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Form;
