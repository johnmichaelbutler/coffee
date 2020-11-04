import React, { useState } from 'react';
import { useRequest } from '../../hooks/use-request';
import { useHistory } from 'react-router-dom';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let location = useHistory();

  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => location.push('/'),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };
  return (
    <div className="w-50 mx-0 container">
      <h1 className="text-3xl text-center">Sign Up Page</h1>
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

export default SignUpPage;
