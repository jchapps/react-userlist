import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.closeError}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.info}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.closeError}>Confirm</Button>
        </footer>
      </Card>
    </>
  );
}

export default ErrorModal;
