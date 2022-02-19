import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";
class App extends Component {
  state = {
    persons: [
      { id: "fhdskjfshf", name: "ashwin", age: 34 },
      { id: "fsdkjfhs", name: "raj", age: 78 },
      { id: "hfksjfs", name: "jainish", age: 23 },
    ],
    otherProperty: "value",
    showPersons: false,
  };
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
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons }, () => console.log(this.state.persons));
  };
  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      padding: "8px",
      border: "1px solid blue",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
      },
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                // key={index}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>hello world!</h1>
          <p className={classes.join(" ")}>it is working now</p>
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,"maximilian")}></Person> */}
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
