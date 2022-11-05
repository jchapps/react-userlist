import React from 'react';
import Userform from './Userform';
import styles from './Userinof.module.css'

function Userinfo() {
  return (
      <div className={styles.userinfo}>
        <Userform/>
      </div>
  );
}

export default Userinfo;
