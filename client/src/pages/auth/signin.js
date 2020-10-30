import React, { useState, useContext } from 'react';
import { useRequest } from '../../hooks/use-request';
import { CurrentUserContext } from '../../context/current-user-context';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const currentUser = useContext(CurrentUserContext);

  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => console.log('Success!'),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  console.log('Current User from signin', currentUser);
  return (
    <div className="w-50 mx-0 container">
      <h1 className="text-3xl text-center">Sign In Page</h1>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          className="bg-gray-200 rounded shadow"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <br />
        <label>Password</label>
        <input
          className="bg-gray-200 rounded shadow"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button>Submit</button>
      </form>
      {errors}
    </div>
  );
}

export default SignInPage;
