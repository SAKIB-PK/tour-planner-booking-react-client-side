import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import AddService from './Component/AddService/AddService';
import Contact from './Component/Contact/Contact';
import ErrorPage from './Component/Error/ErrorPage';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import ManageAllOrder from './Component/ManageAllOrder/ManageAllOrder';
import ManageOrder from './Component/ManageOrder/ManageOrder';
import Navbar from './Component/Navbar/Navbar';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
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
        <PrivateRoute path='/place-order/:id'>
          <PlaceOrder />
        </PrivateRoute>
        <Route exact path='/add'>
          <AddService/>
        </Route>
        <Route path='/add/:id'>
          <AddService/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/manage-order'>
          <ManageOrder/>
        </Route>
        <Route path='/manage-all-order'>
          <ManageAllOrder/>
        </Route>
        <Route path='*'>
          <ErrorPage/>
        </Route>

      </Switch>
      <Footer/>
    </Router>
   </FirebaseAuth>
  );
}

export default App;
