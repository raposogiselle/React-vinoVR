import './App.css';
import WineBar from './components/Navbar';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

import Favorites from './components/Favorites';


import Home from './components/Home';


// import Navbar from 'react-bootstrap/esm/Navbar';





function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/featured" component={Featured} />
          <Route exact path="/myfavorite" component={favorites} />
        </Wrapper>
        <Footer />
      </div>
    </Router>





// function App() {
//   return (
//     <div>
//       {/* <Navbar/> */}
//       <WineBar/>
//       <About />
//       <Login />
//       <Signup />  
//       <br></br>
//       <Featured />
//       <br></br>
//       <Favorites />
//     </div>
    
// =======
  );

}
   
 
export default App;
