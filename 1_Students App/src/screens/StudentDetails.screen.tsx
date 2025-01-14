import { useParams } from "react-router-dom";
import Student from "../components/student/student.component";
import { IStudent } from "../types";
import { useEffect, useReducer, useState } from "react";
import reducer from "../hooks/reducer";

const StudentDetails = () => {
  const { id } = useParams();
  const [currentStudent, setCurrentStudent] = useState<IStudent>();

  useEffect(() => {
    // find the student with ID id from the local storage database
    const studentsListStr = localStorage.getItem("students-list");
    if (studentsListStr) {
      const stdList: IStudent[] = JSON.parse(studentsListStr);
      const std = stdList.find((std) => std.id === id);
      if (std) {
        setCurrentStudent(std);
      } else {
        // TODO: redirect
      }
    }
  }, [id]);

  const handleAbsentChange = () => {};
  return (
    <div>
      {currentStudent && (
        <Student
          id={currentStudent.id}
          name={currentStudent.name}
          age={currentStudent.age}
          absents={currentStudent.absents}
          isGraduated={currentStudent.isGraduated}
          coursesList={currentStudent.coursesList}
          onAbsentChange={handleAbsentChange}
        />
      )}
    </div>
  );
};

export default StudentDetails;
