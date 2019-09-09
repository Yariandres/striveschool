import React from 'react'

export default class MovieDetails extends React.Component {
    constructor(props) {
			super(props);
	
			// set the initial states
			this.state = {
				movie: null
			}
		}
		
    render() {
			console.log(this.state.movie)
			return (
				<div className="container">
					<div className="row">
					{!this.state.movie && <h1 className="text-light">Loading...</h1>}
					{this.state.movie && (
					<>
						<div className="col-md-4">
							<img src={this.state.movie.Poster} className="img-fluid" alt="alt"/>
						</div>
						
						<div className="col-md-8">
							<p className="text-light">{this.state.movie.Plot}</p>              
						</div>
					</>
					)}
					</div>
				</div>
			)
    }

    componentDidMount = async () => {
        var response = await fetch("http://www.omdbapi.com/?apikey=b4b1863b&i="+ this.props.match.params.id);
        var movie = await response.json();

        this.setState({ movie: movie });

        console.log(this.props.match.params.id)
    }
    
    componentDidUpdate = async prevProps => {
        if (prevProps.imdbID !== this.props.match.params.id) {
            var response = await fetch("http://www.omdbapi.com/?apikey=b4b1863b&i="+ this.props.match.params.id);
            var movie = await response.json();

						this.setState({ movie: movie });   
            
				}
				console.log("Update" + this.props.match.params.id)
    }
    
}
