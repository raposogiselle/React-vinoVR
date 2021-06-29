import './App.css';
import WineBar from './components/Navbar';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Featured from './components/Featured';
import Favorites from './components/Favorites';

// import Navbar from 'react-bootstrap/esm/Navbar';


function App() {
  return (
    <div>
      <WineBar/>
      <About />
      <Login />
      <Signup />  
      <br></br>
      <Featured />
      <br></br>
      <Favorites />
    </div>
    
  );

}
   
 
export default App;
