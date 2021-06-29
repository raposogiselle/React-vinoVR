import './App.css';
import WineBar from './components/Navbar';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
// <<<<<<< featuredWine
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
    
// =======
// import Navbar from './components/Navbar';
// import Myfavorite from './components/Myfavorite';
// import Home from './components/Home';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Wrapper>
//           <Route exact path="/home" component={Home} />
//           <Route exact path="/about" component={About} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/signup" component={Signup} />
//           <Route exact path="/featured" component={Featured} />
//           <Route exact path="/myfavorite" component={favorites} />
//         </Wrapper>
//         <Footer />
//       </div>
//     </Router>
// >>>>>>> main
  );

}
   
 
export default App;
