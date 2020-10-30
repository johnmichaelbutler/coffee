import React, { useContext } from 'react';
import { CurrentUserContext } from '../context/current-user-context';
import { Link } from 'react-router-dom';

function Header() {
  const currentUser = useContext(CurrentUserContext);

  const links = [
    !currentUser && { label: 'Sign Up', href: '/signup' },
    !currentUser && { label: 'Sign In', href: '/signin' },
    currentUser && { label: 'Sign Out', href: '/signout' },
  ]
    // Filter out all non-truthy values
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="">
          <Link
            to={href}
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            {label}
          </Link>
        </li>
      );
    });

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Coffee</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="text-sm lg:flex-grow">{links}</ul>
      </div>
    </nav>
  );
}

export default Header;
