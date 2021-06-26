import './App.css';
import About from './components/About';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Myfavorite from './components/Myfavorite';
import Home from './components/Home';

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
          <Route exact path="/myfavorite" component={Myfavorite} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );

}
   
 
export default App;
