import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    students: [],
    projects: []
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          {/* {console.log(this.state.projects)} */}
          {console.log(this.state.students)}
          {this.state.projects.map(project => <div key={project.ID}>{project.Name} {project.Description} {project.RepoURL} <hr /></div>)}

        </header>
      </div>
    );
  }

  componentDidMount = async () => {
    // var studentResp = await fetch("http://localhost:3550/students");
    // var studentJson = await studentResp.json();
    // this.setState({
    //   students: studentJson
    // })

    var projectResp = await fetch("http://localhost:3550/projects");
    var projectJson = await projectResp.json();
    this.setState({
      projects: projectJson
    })


  }
}

export default App;
