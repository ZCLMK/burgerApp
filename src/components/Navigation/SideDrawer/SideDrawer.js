import React from 'react';
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.css";
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = () => {
  return (
    <div className={classes.sideDrawer}>
      <Logo height="5%"/> 
      <nav>
        <NavigationItems />
      </nav>
    </div>
  )
}

export default sideDrawer;