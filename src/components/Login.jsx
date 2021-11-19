import React, {Component} from 'react';
import {Link} from "react-router-dom"

  
export default class Login extends Component {
  state = {
    user: '',
    rememberMe: false
  };
 
  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
  };
 
  handleFormSubmit = () => {
    const { user, rememberMe } = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('mail', rememberMe ? user : '');
  };

  componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('mail') : '';
    this.setState({ user, rememberMe });
  }
 
  render() {
    return (
      <div className="login"> <br /> <h2>Login</h2><br /> 
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Mail Id: <input name="user" value={this.state.user} onChange={this.handleChange}/>
        </label> <br /><br />
        <label>
          <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
        </label><br />
        <Link to="/home"><button type="submit">Sign In</button></Link>
      </form>
      </div>
    );
  }
}
