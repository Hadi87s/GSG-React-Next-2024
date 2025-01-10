import { useEffect, useState } from "react";
import { IStudent } from "../types";
import { useParams } from "react-router-dom";
import Student from "../components/student/student.component";

export default function selectedStudent() {
  const { id } = useParams();
  const [currentStudent, setCurrentStudent] = useState<IStudent>();
  useEffect(() => {
    const studentList = localStorage.getItem("students-list");
    if (studentList) {
      const students: IStudent[] = JSON.parse(studentList);
      if (students) {
        setCurrentStudent(students.find((std) => std.id == id));
      } else {
        // TODO: we will program the redirection later on.
      }
    }
  }, []);

  const handleAbsentChange = () => {};

  return (
    <div>
      {currentStudent && (
        <Student
          key={currentStudent.id}
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
}
