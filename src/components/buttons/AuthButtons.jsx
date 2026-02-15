'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {
  const session = useSession();
  return (
    <div>
      {session.status === 'authenticated' ? (
        <>
          <button onClick={() => signOut()} className="btn btn-outline btn-secondary hidden md:flex">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href="/login" className="btn btn-outline btn-secondary hidden md:flex">
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
