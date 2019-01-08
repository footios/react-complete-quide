import React, { PureComponent } from "react";
import "./App.css";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Eject from "../hoc/Eject";
import withClass_2 from "../hoc/withClass_2"; // no capital letter, it's not a component
//                                             it doesn't return JSX

const AuthContext = React.createContext();

class App extends PureComponent {
  // use it when updates might not required,
  // because it checks allways if props changed
  constructor(props) {
    super(props);
    console.log("[App.js] inside Constuctor", props);
    this.state = {
      persons: [
        { id: "anything", name: "Max", age: "28" },
        { id: "sdo", name: "Manu", age: 29 },
        { id: "iitb", name: "Anna", age: 29 }
      ],
      showPersons: false,
      input: "",
      toggleClicked: 0,
      authendicated: false
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
  // Handling props is useful if you write conponent that are
  // going to be used by other devs.
  // You can restrict the types and values for your props
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  loginHandler = () => {
    this.setState({ authendicated: true });
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
          isAuthenticated={this.state.authendicated}
        />
      );
    }

    return (
      <Eject classes={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </Eject>
    );
  }
}

export default withClass_2(App, classes.App);
