import "./App.css";
import Sidebar from "./components/Sidebar";
import Students from "./components/Students";
import "./style.css";

function App() {
  //write javascript here
  const student = "Dustin";
  const students = ["Jaye", "Joe", "Alyson"];

  //component aka function
  return (
    <>
      <div>
        <Students student={student} students={students} />
        <Sidebar />
      </div>
    </> 
  );
}

export default App;
