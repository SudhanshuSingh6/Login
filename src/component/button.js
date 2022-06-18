import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";
import styles from './button.module.css'
class App extends Component {
    render(){
    return (
    <>
    <Button className={styles.btn1} >
      Login
    </Button>{' '}
    <Button className={styles.btn2} >
      Start Free Trial
    </Button>{' '}
</>
  );
};
}
export default App;