import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const studentsData = [
  { id: 1, name: "Arjun", roll: "101" },
  { id: 2, name: "Meena", roll: "102" },
  { id: 3, name: "Rahul", roll: "103" },
  { id: 4, name: "Divya", roll: "104" },
];

const StudentList = () => {
  const { addToFavourites, favourites } = useContext(StudentContext);

  return (
    <div className="container">
      <h2>Student List</h2>

      {studentsData.map((student) => {
        const isFavourite = favourites.some((s) => s.id === student.id);

        return (
          <div key={student.id} className="card">
            <p>Name: {student.name}</p>
            <p>Roll No: {student.roll}</p>

            <button
              onClick={() => addToFavourites(student)}
              disabled={isFavourite}
              className="btn"
            >
              {isFavourite ? "Added" : "Add to Favourite"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default StudentList;