import React from "react"
 
class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        dob: '',
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
      // console.log("A user was submitted: " + "\n" + "Username: " + this.state.username + "\n" + "Password: " + this.state.password + "\n" + "DOB: " + this.state.dob);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input name="username" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input name="password" type="password" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            DOB:
            <input name="dob" type="date" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  // ReactDOM.render(
  //   <Signup />,
  //   document.getElementById('root')
  // );
 
export default Signup;