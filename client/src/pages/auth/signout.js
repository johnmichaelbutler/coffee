import React, { useEffect } from 'react';
import { useRequest } from '../../hooks/use-request';
import { useLocation } from 'react-router-dom';

function SignOutPage() {
  let location = useLocation();

  const { doRequest } = useRequest({
    url: '/api/users/signout',
    method: 'post',
    body: {},
    onSuccess: () => location.push('/'),
  });

  useEffect(() => {
    doRequest();
  }, [doRequest]);

  return (
    <div>
      <p>Signing you out...</p>
    </div>
  );
}

export default SignOutPage;
