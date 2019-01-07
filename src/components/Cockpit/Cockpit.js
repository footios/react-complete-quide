import React from "react";
import classes from "./Cockpit.css";
import Eject from "../../hoc/Eject";

const cockpit = props => {
  let assignedClasses = [];

  let buttonClass = classes.Button;
  console.log(buttonClass);

  if (props.showPersons) {
    buttonClass = [classes.Button, classes.Red].join(" ");
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <Eject>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>React app</p>
      <button onClick={props.clicked} className={buttonClass}>
        Toggle Persons
      </button>
      <button>Log in</button>
    </Eject>
  );
};

export default cockpit;
