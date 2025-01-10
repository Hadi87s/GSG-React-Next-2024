import { useEffect, useReducer, useRef, useState } from "react";
import AddForm from "../components/add-form/add-form.component";
import Student from "../components/student/student.component";
import useLocalStorage from "../hooks/local-storage.hook";
import { IStudent } from "../types";
import { useSearchParams } from "react-router-dom";
import reducer from "../hooks/reducer";

const Main = () => {
  // const [studentsList, setStudentsList] = useState<IStudent[]>([]);
  const [state, dispatch] = useReducer(reducer, {
    studentsList: [],
    totalAbsents: 0,
  });
  const [filteredList, setFilteredList] = useState<IStudent[]>(
    state.studentsList
  );
  // const [totalAbsents, setTotalAbsents] = useState(0);
  const lastStdRef = useRef<HTMLDivElement>(null);
  const [params, setParams] = useSearchParams();

  const { storedData } = useLocalStorage(state.studentsList, "students-list");
  useEffect(() => {
    const stdList: IStudent[] = storedData || [];
    const totalAbs = stdList.reduce((prev, cur) => {
      return prev + cur.absents;
    }, 0);
    // setTotalAbsents(totalAbs);
    dispatch({ type: "loadAbsents", payload: totalAbs });
    // setStudentsList(stdList);
    dispatch({ type: "loadList", payload: stdList });
  }, [storedData]);

  useEffect(() => {
    const query = params.get("q") || "";
    if (query) {
      setFilteredList(
        state.studentsList.filter((std) =>
          std.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredList(state.studentsList);
    }
  }, [params, state.studentsList]);

  const removeFirst = () => {
    // const newList = [...studentsList];
    // newList.shift(); // removes the first item
    // setStudentsList(newList);
    dispatch({ type: "removeFirst" });
  };

  const handleAbsentChange = (id: string, change: number) => {
    // setTotalAbsents(totalAbsents + change);
    dispatch({type:"absentChange", payload: change});
    // setStudentsList(
    //   studentsList.map((std) =>
    //     std.id === id ? { ...std, absents: std.absents + change } : std
    //   )
    // );
    dispatch({ type: "", payload: { id, change } });
  };

  const handleAddStudent = (newStudent: IStudent) => {
    // setStudentsList([newStudent, ...studentsList]);
    dispatch({ type: "addStudent", payload: newStudent });
  };

  const scrollToLast = () => {
    if (lastStdRef.current) {
      lastStdRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    params.set("q", query);
    setParams(params);
  };

  return (
    <>
      <AddForm className="addForm" onSubmit={handleAddStudent} />
      <div className="stats">
        <button onClick={removeFirst}>POP Student</button>
        <button onClick={scrollToLast}>Scroll to Last</button>
        <b style={{ fontSize: "12px", fontWeight: 100, color: "gray" }}>
          Total Absents {state.totalAbsents}
        </b>
      </div>
      <div className="filter">
        <input
          type="text"
          placeholder="Search"
          onChange={handleSearch}
          value={params.get("q") || ""}
        />
      </div>
      {filteredList.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          absents={student.absents}
          isGraduated={student.isGraduated}
          coursesList={student.coursesList}
          onAbsentChange={handleAbsentChange}
        />
      ))}
      <div ref={lastStdRef}></div>
    </>
  );
};

export default Main;
