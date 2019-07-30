import React, { Component } from 'react';
// importing the navigation component
import MyNav from './components/MyNav';
// importing the footer component
import MyFooter from './components/MyFooter';
// importing the welcome component
import Welcome from './components/Welcome';
// importing the latest book component
import Latest from './components/Latest';
// GLOBAL CSS
import './App.css';


class App extends Component {
 

  render () {
    return (
      <div className="App">      
        <MyNav /> {/* importing the navigation */}
        <Welcome /> {/* importing the Welcome */}
        <Latest /> {/* importing the latest component */}
        <MyFooter /> {/* importing the footer */}  
      </div>
    )
  }
}

export default App;
