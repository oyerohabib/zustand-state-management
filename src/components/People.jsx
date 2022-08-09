import React from "react";
import { usePeopleStore } from "../App/courseStore";
import AddPerson from "./AddPerson";

const People = () => {
  const people = usePeopleStore((state) => state.people);
  return (
    <>
      <AddPerson />
      <div>we have {people.length} people</div>
      <ul>
        {people.map((person) => (
          <li>{person}</li>
        ))}
      </ul>
    </>
  );
};

export default People;
