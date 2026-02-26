import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const FavouriteStudents = () => {
  const { favourites, removeFromFavourites } =
    useContext(StudentContext);

  return (
    <div className="container">
      <h2>Favourite Students</h2>

      {favourites.length === 0 ? (
        <p>No favourite students added yet</p>
      ) : (
        favourites.map((student) => (
          <div key={student.id} className="card">
            <p>Name: {student.name}</p>
            <p>Roll No: {student.roll}</p>

            <button
              onClick={() => removeFromFavourites(student.id)}
              className="btn remove"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavouriteStudents;