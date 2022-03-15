import React, { useState, useRef } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrappers";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  
  const [error, setError] = useState(); //This useState is for showing error msg when required

  function addUserHandler(event) {
    event.preventDefault(); //preventDefault() help to not reload your page

    const enteredName = (nameInputRef.current.value);
    const enteredUserAge = (ageInputRef.current.value);

    //To check if both the boxes are empty, we return
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter both valid name and age",
      });
      return;
    }
    //To check if value of age is < 1, we return
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge); //or console.log(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };


  function errorHandler() {
    setError(null);
  }

  return (
    <Wrapper>
      {/*<ErrorModal title="An Error Occured!!" message="Something Went Wrong Here!!"/>  This is hardcoaded way of showing error msg */}
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
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
