import React, { Component } from "react";
import classes from "./Person.css";
import withClass_2 from "../../../hoc/withClass_2";
import Eject from "../../../hoc/Eject";

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
      <Eject>
        <p onClick={this.props.click}>
          I'm {this.props.name}. I'm {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Eject>
    );
  }
}

export default withClass_2(Person, classes.Person);
