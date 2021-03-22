import logo from './logo.svg';
import './App.css';
import Main from './component/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login/Login';
import { createContext, useState } from 'react';
import Destination from './component/Destination/Destination';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import SearchResult from './component/SearchResult/SearchResult';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p className="text-center shadow">Logged in by : {loggedInUser.email}</p>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute path="/destination">
            <Destination></Destination>
          </PrivetRoute>
          <PrivetRoute path="/searchresult">
            <SearchResult></SearchResult>
          </PrivetRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
