import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddService from './Component/AddService/AddService';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Registration from './Component/Registration/Registration';
import Services from './Component/Services/Services';
import FirebaseAuth from './Context/FirebaseAuth';

function App() {
  return (
   <FirebaseAuth>
      <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Registration/>
        </Route>
        <PrivateRoute path='/services'>
          <Services/>
        </PrivateRoute>
        <Route path='/add'>
          <AddService/>
        </Route>

      </Switch>
      <Footer/>
    </Router>
   </FirebaseAuth>
  );
}

export default App;
