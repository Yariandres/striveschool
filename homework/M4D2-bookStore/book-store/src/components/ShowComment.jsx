import React, { Component } from 'react'
import { } from 'reactstrap';

class ShowComment extends Component { 

  constructor(props) {
    super(props);

      this.state = {
        singleComment: [],
        isLoading: true

      }
  } 

  render() {
    return (<>  
    <h1>{singleComment[0]._id}</h1>

                {/* <h1>singleComment[0]._id</h1>       */}
              {/* { this.state.isLoading && (
                <div className="container text-center my-5">
                  Loading comment... <Spinner size="sm" color="primary" />
                </div>
              )}

              {!this.state.isLoading && (
                <div className="container">
                  {this.state.singleComment.length < 0 && this.state.singleComment.map(comment => <div className="row">{comment[0]._id}</div>)}

                    {this.state.singleComment.length === 0 && <div>
                      No comments have been given for this book
                    </div>}
                </div>
              )}                */}
            </>
    )
  }

  componentDidMount = async (book) =>{

    var response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/0316438960",{
      methods: "GET",
      headers: {
        "Authorization": "Basic dXNlcjEwOmhtV2hyOWt0YzRiZWpqVGc="
      }
    });
    var singleComment = await response.json();
    this.setState({
      singleComment: singleComment

      
    });
    console.log(singleComment[0]._id)
  }
  
}

export default ShowComment
