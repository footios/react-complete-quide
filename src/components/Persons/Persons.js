import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] inside Constuctor", props);
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log(
      "[UPDATE Persons.js] Inside compenentWillReceiveProps",
      nextProps
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside shouldComponentUpdate",
      nextProps,
      nextState
    );
    // return true;
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("UPDATE Persons.js] Inside componentDidUpdate");
  }
  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={this.props.changed.bind(this, person.id)}
        />
      );
    });
  }
}

export default Persons;
// In the bellow case you should have 'event' at the begging of the arguments in
//nameChangeHandler = (event, id) => {...
// case:
// changed={event => props.changed(event, person.id)}
// but in with 'bind' it 'even' must be the last argument
// nameChangeHandler = (id, event) => {
