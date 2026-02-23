'use client';
import Link from 'next/link';
import Container from '../container/Container';
import Logo from '../Logo/Logo';
import Navlink from '../buttons/Navlink';
import AuthButtons from '../buttons/AuthButtons';
import { useAuth } from '@/hooks/useAuth';

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const nav = (
    <>
      <li>
        <Navlink href={'/'}>Home</Navlink>
      </li>
      <li>
        <Navlink href={'/service/:id'}>Services</Navlink>
      </li>
      <li>
        <Navlink href={'/my-bookings'}>My Bookings</Navlink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm px-3 lg:px-0">
      <Container>
        <div className="navbar px-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>

              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                {nav}
              </ul>
            </div>

            <div>
              <Logo />
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{nav}</ul>
          </div>

          <div className="navbar-end gap-2">
            <AuthButtons />
            {!isLoggedIn && (
              <Link href="/register" className="btn btn-primary hidden md:flex">
                Register
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
