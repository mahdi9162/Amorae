'use client';

const { useSession } = require('next-auth/react');

export const useAuth = () => {
  const { data, status } = useSession();

  const user = data?.user || null;

  return {
    user,
    isLoggedIn: status === 'authenticated',
    isLoading: status === 'loading',
    isGuest: status === 'unauthenticated',
  };
};
