import React from 'react';
import Logo from '../../Logo/Logo';
import DrawerOpener from './DrawerOpener/DrawerOpener';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.css';

const toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      {/* <div>MENU</div> */}
     <nav>
       <NavigationItems />
    </nav>
       <Logo height="80%"  marginBottom="0px"/>
    </header>
  );
}

export default toolbar;

