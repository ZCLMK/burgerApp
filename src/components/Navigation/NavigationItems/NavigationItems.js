import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';


const NavigationItems = () => (
  // we outsource an NavigationItem due to the styling for each Item
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>  
    <NavigationItem link="/">Checkout</NavigationItem>  
  </ul>
);

export default NavigationItems;