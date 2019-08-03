import React from 'react';

export default class DisplaySearch extends React.Component {

  render() {
    console.log(this.props.films)
     return ( <h1 className="text-light">Search result for: </h1>
       
      //<div className="container-fluid text-light mt-4">        
    //           <Row>
    //             {this.props.films.slice(0, 5).map(film =>        
    //               <Col key={film.imdbID} sm="3" md="2">
    //                 <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
    //                     <CardImg src={film.Poster} alt="film"/>
    //                     <CardTitle>{film.Title}</CardTitle>
    //                     <small>{film.Year}</small>
    //                 </Card>
    //               </Col>                
    //             )}
    //           </Row> 
    //         </div>      
    );
  }
}