import React from 'react';
import NavBar from './components/NavBar';
import SearchInput from './components/SearchInput';
import FavGallery from './components/FavGallery';
import FavSaga from './components/FavSaga';
import FavSagaNow from './components/FavSagaNow';

import './style/App.css';


class App extends React.Component {
  
  render () {
    return (
      <div className="App">

      <NavBar/>
      <SearchInput/>
      <FavGallery/>
      <FavSagaNow/>
      <FavSaga/>

      </div>
    )
  }
}



export default App;
