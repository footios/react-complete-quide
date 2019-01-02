import React, { Component } from "react";
import "./App.css";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "anything", name: "Max", age: 28 },
      { id: "sdv", name: "Manu", age: 29 },
      { id: "sssdv", name: "Anna", age: 29 }
    ],
    showPersons: false
  };

  inputHandler = event => {
    this.setState({ input: event.input.value });
  };

  nameChangeHandler = (id, event) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    let persons = null;
    let buttonClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={this.nameChangeHandler.bind(this, person.id)}
              />
            );
          })}
        </div>
      );
      buttonClass = classes.Red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>
          Hi
          <br /> I'm a Happy <br />
        </h1>
        <p className={assignedClasses.join(" ")}>React app</p>

        <button onClick={this.togglePersonHandler} className={buttonClass}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;

// 6. 72. Debugging React Apps
