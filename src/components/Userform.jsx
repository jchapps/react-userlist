import React, { useState, useCallback, setValue } from "react";
import Button from "./Button";
import styles from "./Userform.module.css";

function Userform() {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  function submitHandler(e) {
    e.preventDefault();
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  const handleAgeChange = (e) => {
    setAge(e.target.value)
    console.log(age)
  }

  return (
    <div>
      <form className={styles.userform} onSubmit={submitHandler}>
        <label>
          Name:
          <input type="text" className={styles.input} value={name} onChange={handleNameChange}/>
          Age:
          <input type="number" age="age" className={styles.input} onChange={handleAgeChange} />
          <Button type="submit">Add User</Button>
        </label>
      </form>
    </div>
  );
}

export default Userform;
