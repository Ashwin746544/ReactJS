import { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] constructor");
  }
  componentWillMount = () => {
    console.log("[Person.js] componentWillMount");
  };
  componentDidMount = () => {
    console.log("[Person.js] componentDidMount");
  };
  render() {
    console.log("[Person.js] render");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I am a {this.props.name}! and my age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}
export default Person;
