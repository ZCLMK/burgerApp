import classes from './DrawerOpener.css';
import React from 'react';

const DrawerOpener = (props) => {
  return(
    <div className={classes.DrawerOpener} onClick={props.popOpen} style={props.style}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
 
export default DrawerOpener;