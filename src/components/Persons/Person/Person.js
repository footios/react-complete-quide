import React, { Component } from "react";
import classes from "./Person.css";
import withClass_2 from "../../../hoc/withClass_2";
import Eject from "../../../hoc/Eject";
import PropTypes from "prop-types";

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
    if (this.props.position === 0) this.element.focus();
  }
  render() {
    return (
      <Eject>
        <p onClick={this.props.click}>
          I'm {this.props.name}. I'm {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          ref={inp => (this.element = inp)}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Eject>
    );
  }
}

// Basically editing this class after it was defined
Person.propTypes = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired
};

export default withClass_2(Person, classes.Person);
