import React, { Component } from 'react';
import Fantasy from '../data/fantasy.json';

class Fantasy extends Component {
  render() {
    return (
      <div>
        {Fantasy.map((filmDetail, index) => {
          return <h1>{ filmDetail.title }</h1>

        })}
      </div>
    )
  } 

}

export default Fantasy

