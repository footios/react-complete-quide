import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => props.clicked(index)}
        changed={props.changed.bind(this, person.id)}
      />
    );
  });

export default persons;
// In the bellow case you should reverse the order of the arguments in
//nameChangeHandler = (id, event) => {...
// changed={event => props.changed(event, person.id)}
