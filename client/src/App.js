import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignInPage from './pages/auth/signin';
import SignUpPage from './pages/auth/signup';
import { CurrentUserContext } from './context/current-user-context';
import axios from 'axios';
import Header from './components/header';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get('/api/users/currentuser');
      setCurrentUser(data);
    };
    getUser();
  }, []);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <h1>Welcome to Coffee Client!</h1>
        <Switch>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/signin">
            <SignInPage />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
