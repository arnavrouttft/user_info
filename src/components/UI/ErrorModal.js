import React from "react";
import ReactDOM from "react-dom"; //The "ReactDOM" name can be anything you want

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

function ModalOverlay(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        /*Creating this createPortal method below after importing ReactDOM*/
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        /*Creating this createPortal method below after importing ReactDOM*/
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
