import React, { useState, useRef, Fragment } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeNameInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredCollegeName = collegeNameInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      enteredName.trim().length === 0 ||
      enteredCollegeName.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (parseInt(enteredUserAge) < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (Age should be > 0).",
      });
      return;
    }
    props.onAddUser({
      name: enteredName,
      age: enteredUserAge,
      collegename: enteredCollegeName,
    });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeNameInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <label htmlFor="collegename">College Name</label>
          <input type="text" id="collegename" ref={collegeNameInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
