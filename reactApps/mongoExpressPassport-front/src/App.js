import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    user: null,
    token: null,
    username: "",
    password: ""

  }
  render() {
    return (
      <div className="App">
        {!this.state.user &&
          <>
            <input type="text" value={this.state.username} placeholder="username" onChange={(val) => this.setState({ username: val.currentTarget.value })}></input>
            <input type="password" value={this.state.password} placeholder="password" onChange={(val) => this.setState({ password: val.currentTarget.value })}></input>

            <input type="button" onClick={this.login} value="Login"></input>
          </>
        }

        {this.state.user && <input type="button" onClick={this.logout} value="Logout"></input>}
        <hr />
        {this.state.user && <h2>Welcome {this.state.user.firstname} </h2>}
        {this.state.user && <h2>Click login to start</h2>}
      </div>
    );
  }

  logout = () => {
    this.setState({
      user: null,
      token: null
    })
    localStorage.removeItem("accessToken")
  }

  login = async () => {
    var res = await fetch("http://localhost:3123/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    var json = await res.json();
    this.setState({
      user: json.user,
      token: json.token
    })

    localStorage.setItem("accessToken", json.token)
    console.log(json);
  }

  componentDidMount = async () => {
    var token = localStorage.getItem("accessToken")
    if (token) {
      var res = await fetch("http://localhost:3123/users/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        }
      })

      if (res.ok) {
        var json = await res.json();
        this.setState({
          user: json.user,
          token: json.token
        })

        localStorage.setItem("accessToken", json.token)
      }
    } else {
      localStorage.removeItem("accessToken")
    }
  }
}

export default App;
