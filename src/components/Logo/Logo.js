import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => {
  let styles = {
    height: props.height, 
    marginBottom: props.marginBottom
  }
  return (
    <div className={classes.Logo} style={styles}>
      <img src={burgerLogo} alt="my burger" />
    </div>
  );
}

export default logo;
