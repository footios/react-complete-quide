import React, { PureComponent } from "react";
import "./App.css";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Eject from "../hoc/Eject";
import withClass_2 from "../hoc/withClass_2"; // no capital letter, it's not a component
//                                             it doesn't return JSX
class App extends PureComponent {
  // use it when updates might not required,
  // because it checks allways if props changed
  constructor(props) {
    super(props);
    console.log("[App.js] inside Constuctor", props);
    this.state = {
      persons: [
        { id: "anything", name: "Max", age: 28 },
        { id: "sdo", name: "Manu", age: 29 },
        { id: "iitb", name: "Anna", age: 29 }
      ],
      showPersons: false,
      input: ""
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     "[UPDATE App.js] Inside shouldComponentUpdate",
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.showPersons !== this.props.showPersons ||
  //     nextProps.input !== this.props.input
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE App.js] Inside componentWillUpdate",
      nextProps,
      nextState
    );
  }

  componentDidUpdate() {
    console.log("UPDATE App.js] Inside componentDidUpdate");
  }

  inputHandler = event => {
    this.setState({ input: event.target.value });
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
    console.log("[App.js] Inside Render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Eject classes={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </Eject>
    );
  }
}

export default withClass_2(App, classes.App);

//
//
