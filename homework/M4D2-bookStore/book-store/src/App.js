import React, { Component } from 'react';
// importing the navigation component
import MyNav from './components/MyNav';
// importing the welcome component
import Welcome from './components/Welcome';
// importing the latest book component
import Latest from './components/Latest';
// importing all comments display component
import Comments from './components/Comments';
// importing the footer component
import MyFooter from './components/MyFooter';
// GLOBAL CSS
import './App.css';



class App extends Component {


  
  render () {
    return (
      <div className="App">      
        <MyNav /> {/* importing the navigation */}
        <Welcome /> {/* importing the Welcome */}
        <Latest /> {/* importing the latest book component */}
        
        <Comments/> {/* importing all comments display component */}
        <MyFooter /> {/* importing the footer */}  
      </div>
    )
  }
}

export default App;
