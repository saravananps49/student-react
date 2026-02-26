import React, { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (student) => {
    setFavourites((prev) => {
      const exists = prev.find((s) => s.id === student.id);
      if (exists) return prev;
      return [...prev, student];
    });
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((student) => student.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </StudentContext.Provider>
  );
};