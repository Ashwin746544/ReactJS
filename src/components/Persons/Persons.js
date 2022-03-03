import { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] constructor");
    this.state = {
      name: "hello",
    };
  }
  componentWillMount = () => {
    console.log("[Persons.js] componentWillMount");
  };
  componentDidMount = () => {
    console.log("[Persons.js] componentDidMount");
  };

  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE Persons.js] componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] shouldComponentUpdate",
      nextProps,
      nextState
    );
    return (
      this.props.persons !== nextProps.persons ||
      this.props.clicked !== nextProps.clicked ||
      this.props.changed !== nextProps.changed
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      "[UPDATE Persons.js] componentWillUpdate",
      nextProps,
      nextState
    );
  }
  componentDidUpdate() {
    console.log("[UPDATE Persons.js] componentDidUpdate");
  }

  render() {
    console.log("[Persons.js] render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
