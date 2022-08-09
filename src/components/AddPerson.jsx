import React, { useRef } from "react";
import { usePeopleStore } from "../App/courseStore";

const AddPerson = () => {
  const inputRef = useRef()
  const addPerson = usePeopleStore((state) => state.addPerson);
  const addNewPerson = () => {
    addPerson(inputRef.current.value);
    inputRef.current.value = ""
  }
  return (
    <>
      <input type="text" ref={inputRef} placeholder="enter a person name" />
      <button onClick={addNewPerson}>add person</button>
    </>
  );
};

export default AddPerson;
