import { IStudent } from "../types";

interface State {
  studentsList: IStudent[];
  totalAbsents: number;
}

interface Action {
  type: string;
  payload?: any; // Optional, depending on your logic.
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "addStudent": {
      return {
        ...state,
        studentsList: [action.payload, ...state.studentsList],
      };
    }
    case "removeFirst": {
      return {
        ...state,
        studentsList: state.studentsList.slice(1),
      };
    }
    case "loadList": {
      return { ...state, studentsList: action.payload };
    }
    case "loadAbsents": {
      return { ...state, totalAbsents: action.payload };
    }
    case "absentChange": {
      return { ...state, totalAbsents: state.totalAbsents + action.payload };
    }
    case "updateStudentAbsents": {
      return {
        ...state,
        studentsList: state.studentsList.map((std) =>
          std.id == action.payload.id
            ? { ...std, absents: std.absents + action.payload.change }
            : std
        ),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
