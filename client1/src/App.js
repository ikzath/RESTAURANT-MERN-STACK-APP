import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GetMenuItems from './components/GetMenuItems';
import CreateMenuItem from './components/CreateMenuItem';
import UpdateMenuItem from './components/UpdateMenuItem';
import ShowMenuItem from './components/ShowMenuItem';
import Login from './components/Login';
import WelcomePage from './components/WelcomePage';



function App() {

  return (
    
    <Router>
      <Switch>
      <Route path='/menu-items' component={GetMenuItems} />
      <Route path='/login' component={Login} />
      <Route path='/create-item' component={CreateMenuItem} />
      <Route path='/update-item/:id' component={UpdateMenuItem} />
      <Route path='/show-item/:id' component={ShowMenuItem} />
      <Route exact path='/' component={WelcomePage} />
      </Switch>
  </Router>
  );
}

export default App;
