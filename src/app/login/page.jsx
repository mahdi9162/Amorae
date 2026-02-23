import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../lib/authOption';
import LoginClient from './LoginClient';
import { redirect } from 'next/navigation';

const Login = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/');
  }

  return <LoginClient />;
};

export default Login;
