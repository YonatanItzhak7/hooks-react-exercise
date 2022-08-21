import { useState } from "react";
import Teacher from "./Teacher.component";
import Student from "./Student.component";
function Course() {
  const [subjectArray,setSubjectArray]= useState(["Math", "English", "Hebrew", "Sport", "History"]);
  const [arrayStudents, setArrayStudents] = useState([]);
  const [teacher, setTeacher] = useState({
    firstName: "N/A",
    lastName: "N/A",
  });
  const ArrayOfObj = [
    {
      firstName: "Yonatan",
      lastName: "Itzhak",
      age: 24,
    },
    {
      firstName: "Ilan",
      lastName: "Itzhak",
      age: 26,
    },
    {
      firstName: "Agam",
      lastName: "Itzhak",
      age: 14,
    },
    {
      firstName: "Liel",
      lastName: "Itzhak",
      age: 16,
    },
  ];
  function ChangeStudentsArray() {
    setArrayStudents(ArrayOfObj);
  }

  function addObjToArray() {
    setSubjectArray([...subjectArray,"New"])
  }

  return (
    <div>
      <h1>
        {subjectArray.map((item) => (
          <h1>{item}</h1>
        ))}
      </h1>
      <Teacher Obj={teacher} />
      <button onClick={ChangeStudentsArray}>
        Change Students To Obj Array
      </button>
      <button onClick={addObjToArray}>Add To Sub Array</button>
      <form>
        <h2>Add New Student</h2>
            <input type="text" placeholder="Enter First Name"/>
            <input type="text" placeholder="Enter Last Name"/>
            <input type="number" placeholder="Enter Age"/>
        </form>
      <Student/>
      {ArrayOfObj.map((item) => (<Student/>))}
    </div>
  );
}
export default Course;
