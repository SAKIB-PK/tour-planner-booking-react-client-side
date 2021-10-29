import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
