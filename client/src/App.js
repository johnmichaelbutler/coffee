import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SignInPage from './pages/auth/signin';
import SignUpPage from './pages/auth/signup';
import axios from 'axios';
import Header from './components/header';
import SignOutPage from './pages/auth/signout';
import Categories from './pages/menu/categories';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get('/api/users/currentuser');
      console.log('data from GET currentuser', data);
      setCurrentUser(data);
    };
    getUser();
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <h1>Welcome to Coffee House!</h1>
      <Link to="/signin">Sign In</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/signout">Sign Out</Link>
      <Link to="/menu">Menu</Link>
      <Switch>
        <Route path="/signup">
          <SignUpPage currentUser={currentUser} />
        </Route>
        <Route path="/signin">
          <SignInPage currentUser={currentUser} />
        </Route>
        <Route path="/signout">
          <SignOutPage currentUser={currentUser} />
        </Route>
        <Route path="/menu">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
