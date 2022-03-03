import Aux from "../../hoc/AuxC";
import classes from "./Cockpit.css";
const Cockpit = (props) => {
  let btnClass = classes.Button;
  if (props.showPersons) {
    btnClass = [classes.Button, classes.red].join(" ");
  }
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    // <div className={classes.Cockpit}>
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>it is working now</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
};

export default Cockpit;
