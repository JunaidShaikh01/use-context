import React, { useContext, useEffect } from "react";
import NoteContext from "../Context/Notes/NoteContext";
export default function About() {
  const value = useContext(NoteContext);
  useEffect(() => {
    value.update();
  }, []);

  return (
    <div>
      <h1>This is About Page , Welcome to Welcome Page</h1>
      <h1>
        I'm {value.state.name} and my age is {value.state.age}
      </h1>
    </div>
  );
}
