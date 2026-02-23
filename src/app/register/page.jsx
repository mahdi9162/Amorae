import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../lib/authOption';
import { redirect } from 'next/navigation';
import RegisterClient from './RegisterClient';

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/');
  }
  return <RegisterClient />;
};

export default page;
