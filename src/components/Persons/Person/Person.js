import React, { Component } from "react";
import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] inside Constuctor", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount");
  }
  render() {
    return (
      <WithClass classes={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name}. I'm {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}

export default Person;
