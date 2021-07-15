import React,{useState} from "react"
import BgLightImg from '../images/bg-light-landingpage-general.png'; // Tell webpack this JS file uses this image
import "../styles/Login.css"
 
function Login()  {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();

     const handleSubmit = e => {
          e.preventDefault();
          console.log("username is " + username);
          console.log("password is " + password);
     };
      
     
  
  
  
  
      return (
        <div className="bg">
        <div className="loginCard">
          <h1 id="loginTitle">LOGIN</h1>
          <form onSubmit={handleSubmit}>
              <div className="field">
                  <label className="label">USER NAME</label>
                  <div className="subfield">
                    <input 
                        id="input"
                        className="username" 
                        type="text" 
                        name="username" 
                        style={{color:'#F4E5C4'}} 
                        placeholder="VinoVR"
                        onChange={ e => setUsername(e.target.value)} 
                    />
                  </div>
              </div>
              <div className="field">
                  <label className="label">PASSWORD</label>
                    <div className="subfield">
                      <input 
                          id="input"
                          className="password"
                          type="password" 
                          name="password" 
                          style={{color:'#F4E5C4'}} 
                          placeholder="******"
                          onChange={e => setPassword(e.target.value)} 
                      />
                    </div>
                  
              </div>
              <div className="buttonField">
                  <button 
                      id="loginUser"
                      className="signInButton"
                      type="submit" 
                      value="Submit" 
                >
                  SIGN IN
                </button>
              </div>
           
          </form>
          {/* <div className="linkToSignUp">
               Not a member?
               <a href="/signup"><strong className="linkToSignUp">Create an account</strong></a>
          </div> */}
        </div>
        </div>
      );
    }
  
  
  // ReactDOM.render(
  //   <Login />,
  //   document.getElementById('root')
  // );
 
export default Login;