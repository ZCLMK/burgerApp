import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.css';
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import DrawerOpener from '../../components/Navigation/Toolbar/DrawerOpener/DrawerOpener';

class Layout extends Component {

  state = {
    showDrawer: false
  }
    sideDrawerClosedHandler = () => {
      this.setState({showDrawer: false})
  }

  sideDrawerOpenedHandler = () => {
    console.log('tamere en short');
    
    this.setState({showDrawer:true})
  }

  render(){
    return (
      <Aux>
      <Toolbar />
      <SideDrawer 
        open={this.state.showDrawer}
        closed={this.sideDrawerClosedHandler}
      />
      <DrawerOpener 
        popOpen={this.sideDrawerOpenedHandler}
   
      />
       {/*    <div>Toolbar, SideDrawer, Backdrop</div> */}
          <main className={classes.Content}>
              {this.props.children}
          </main>
      </Aux>
    )
  }
}

export default Layout;