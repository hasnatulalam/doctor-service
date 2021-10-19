
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";



import Appbar from './components/Shared/Appbar/Appbar'

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking'
import Login from './components/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';

import Doctor from './components/Home/Doctor/Doctor';
import Services from './components/Home/Services/Services';
import Doctors from './components/Home/Doctors/Doctors';




function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
      <Appbar></Appbar>
    <Switch>
      <Route exact path="/">
     <Home></Home>
      </Route>
      <Route  path="/home">
        <Home></Home>
      </Route>
      <PrivateRoute  path="/services">
        <Services></Services>
      </PrivateRoute>
      
      <Route  path="/doctors">
        <Doctors></Doctors>
      </Route>
      <Route  path="/login">
        <Login></Login>
      </Route>
      <Route path="/register">
              <Register></Register>
            </Route>
      <PrivateRoute  path="/booking/:serviceId">
        <Booking></Booking>
      </PrivateRoute>
      <Route  path ="*">
           <NotFound></NotFound>
      </Route>
     
     
    </Switch>
   
  </Router>
        </AuthProvider>
    </div>
    
  );
}

export default App;
