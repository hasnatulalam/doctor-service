
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Shared/Home/Home';




function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
     
     
    </Switch>
  </Router>
  );
}

export default App;
