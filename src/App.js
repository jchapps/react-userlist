import "./App.css";
import { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/Userslist";

function App() {
  const [usersList, setUsersList] = useState([]);

  function addUserHandler(name, age) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: name, age: age, id: Math.random().toString() }];
    });
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
