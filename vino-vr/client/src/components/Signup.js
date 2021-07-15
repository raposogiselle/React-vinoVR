import React from "react";
import BgLightImg from '../images/bg-light-landingpage-general.png'; // Tell webpack this JS file uses this image
import "../styles/Signup.css"
 
export class Signup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
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
      // console.log("A user was submitted: " + "\n" + "Email: " + this.state.email + "\n" + "Username: " + this.state.username + "\n" + "Password: " + this.state.password + "\n" + "DOB: " + this.state.dob);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="bg">
        <div className="signupCard">
          <h1 id="signupTitle">SIGN UP</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">USER NAME</label>
              <div className="subfield">
                <input id="input" name="username" type="text" style={{color:'#F4E5C4'}} placeholder="VinoVR" value={this.state.value} onChange={this.handleChange} />
              </div>
            </div>
            <div className="field">
              <label className="label">EMAIL ADDRESS</label>
              <div className="subfield">
                 <input id="input" name="email" type="text" style={{color:'#F4E5C4'}} placeholder="vinovr@mail.com" value={this.state.value} onChange={this.handleChange} />  
              </div>
              
            </div>
            <div className="field">
              <label className="label">PASSWORD</label>
              <div className="subfield">             
                 <input id="input" name="password" type="password" style={{color:'#F4E5C4'}} placeholder="******" value={this.state.value} onChange={this.handleChange} />
              </div>
            </div>
            <div className="field">
              <label className="label">BIRTHDAY</label>
              <div className="subfield">
              <input id="input" name="dob" type="date" style={{color:'#F4E5C4'}} value={this.state.value} onChange={this.handleChange} />
              </div>
            </div>
            <div className="buttonField" >
              <input id="signUpUser" type="submit" value="SIGN UP" />
            </div>
          </form>
        </div>
        </div>
      );
    }
  }
  
  // ReactDOM.render(
  //   <Signup />,
  //   document.getElementById('root')
  // );
 
export default Signup;