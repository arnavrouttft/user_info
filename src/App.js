import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const[usersList, setUsersList] = useState([]);

  function addUserHandler (uName, uAge) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}]; 
    });  //we provide id above to have each user unique and we are calling it in UsersList.js file via key
  };

  return (
    <React.Fragment>  {/* This will always work */} {/* instead of React.Fragment we can also use --> <> */}
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList} />
    </React.Fragment>  /* </> */
  );
}

export default App;
