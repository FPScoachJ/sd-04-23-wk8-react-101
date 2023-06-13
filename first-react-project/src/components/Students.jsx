import React from "react";
import StudentName from "./StudentName";

export default function Students({ student, students }) {
  return (
    <div>
      <p>hello</p>
      {students.map((student) => (
        <StudentName key = {student} student={student} />
      ))}
    </div>
  );
}
