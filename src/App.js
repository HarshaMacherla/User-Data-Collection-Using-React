import React from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import { useState, Fragment } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (obj) => {
    setUsersList((previousUserData) => [
      ...previousUserData,
      { ...obj, id: Math.random().toString() },
    ]);
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
