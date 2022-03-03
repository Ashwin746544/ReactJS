import { Component, PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[app.js] constructor");
    this.state = {
      persons: [
        { id: "fhdskjfshf", name: "ashwin", age: 34 },
        { id: "fsdkjfhs", name: "raj", age: 78 },
        { id: "hfksjfs", name: "jainish", age: 23 },
      ],
      otherProperty: "value",
      showPersons: false,
    };
  }
  componentWillMount = () => {
    console.log("[App.js] componentWillMount");
  };
  componentDidMount = () => {
    console.log("[App.js] componentDidMount");
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE app.js] shouldComponentUpdate", nextProps, nextState);
  //   return true;
  //   // return (
  //   //   this.state.persons != nextState.persons ||
  //   //   this.state.showPersons !== nextState.showPersons
  //   // );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE app.js] componentWillUpdate", nextProps, nextState);
  }
  componentDidUpdate() {
    console.log("[UPDATE app.js] componentDidUpdate");
  }
  // state = {
  //   persons: [
  //     { id: "fhdskjfshf", name: "ashwin", age: 34 },
  //     { id: "fsdkjfhs", name: "raj", age: 78 },
  //     { id: "hfksjfs", name: "jainish", age: 23 },
  //   ],
  //   otherProperty: "value",
  //   showPersons: false,
  // };
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === id);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons,
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };
  render() {
    console.log("[app.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => this.setState({ showPersons: true })}>
          Toggle button
        </button>
        <Cockpit
          appTitle={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}
        ></Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;
