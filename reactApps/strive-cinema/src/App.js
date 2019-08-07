import React from 'react';
import NavBar from './components/NavBar';
import SearchInput from './components/SearchInput';
import FavGallery from './components/FavGallery';
import FavSaga from './components/FavSaga';
import FavSagaNow from './components/FavSagaNow';
import MovieDetails from './components/MovieDetails';
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './style/App.css';

class App extends React.Component {
  
  render () {
    return (

      <Router>
        <div className="App">
          <NavBar/>
          <Route path="/" exact render={() => <><Home/><SearchInput/></>}/>
          <Route path="/Register" component={Register}/>          
          <Route path="/FavGallery" render={() => <><SearchInput/><FavGallery/></>}/>
          <Route path="/FavSagaNow" render={() => <><SearchInput/><FavSagaNow/></>}/>
          <Route path="/FavSaga" render={() => <><SearchInput/><FavSaga/></>}/>
          <Route path="/details/:id" component={MovieDetails}/>
        </div>
      </Router>
    )
  }
}

export default App;
