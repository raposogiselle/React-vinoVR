import React from "react"
import BgLightImg from '../images/bg-light-landingpage-general.png'; // Tell webpack this JS file uses this image

 
export class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      // console.log("A user logged in: " + "\n" + "Username: " + this.state.username + "\n" + "Password: " + this.state.password);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
          <h1>LOGIN</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input name="username" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Password:
              <input name="password" type="password" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }
  
  // ReactDOM.render(
  //   <Login />,
  //   document.getElementById('root')
  // );
 
export default Login;