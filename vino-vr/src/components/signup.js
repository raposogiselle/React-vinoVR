  
import React from "react"
 
class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        DOB: '',
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
      console.log('A user was submitted: ' + this.state.username + this.state.password + this.state.dob);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            DOB:
            <input type="date" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <Signup />,
    document.getElementById('root')
  );
 
export default Signup;