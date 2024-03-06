import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("/api/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Late night code!</h1>
      <p>Total Students: {students.length}</p>
      {students.map((student, index) => {
        return (
          <div key={student.id}>
            <h4>{student.name}</h4>
            <h5>{student.class}</h5>
          </div>
        );
      })}
    </>
  );
}

export default App;
