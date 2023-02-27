import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import {
  Button,
  IconButton, MobileNav, Navbar, Typography
} from "@material-tailwind/react";
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';


const navigation = [
  { name: 'Dashboard', href: '/', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const {setUserInfo, userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/profile`, {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  });

  function logout() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const email = userInfo?.email;
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="medium"
        className="p-1 font-normal"
      >
        <a href="/" className="flex items-center text-gray-700 hover:text-primary">
          Dashboard
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-secondary">
        <Typography
          as="a"
          href="/"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 font-semibold"
        >
          <span>Times Of Policy</span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className='hidden lg:inline-block'>
          {email && (
            <>
              <Link to={'/create'} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-md font-medium">
                Write
              </Link>
              <Link to='/'>
                <button
                  className="px-6 py-2 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary"
                  onClick={logout}
                >
                    Logout
                </button>
              </Link>
            </>
          )}
          {/* <Button variant="gradient" size="sm" className="ml-2 transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary">
            <span>Get Started</span>
          </Button> */}
          {!email && (
            <>
              <Link to="/login" className='text-gray-700 hover:text-primary px-3 py-2 rounded-md text-md font-medium'>
                Sign In
              </Link>
              <Link to='/register'>
                <button className="px-4 py-2 text-sm text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary">
                  Get Started
                </button>
              </Link>
            </>
          )}
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {email && (
            <>
              <Link to={'/create'} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-md font-medium">
                Write
              </Link>
              <Link to='/'>
                <button
                  className="px-6 py-2 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary"
                  onClick={logout}
                >
                    Logout
                </button>
              </Link>
            </>
          )}
          {!email && (
            <>
              <Link to="/login" className='text-gray-700 hover:text-primary px-3 py-2 rounded-md text-md font-medium'>
                Sign In
              </Link>
              <Link to='/register'>
                <button className="px-4 py-2 text-sm text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary">
                  Get Started
                </button>
              </Link>
            </>
          )}
          {/* <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Get Started</span>
          </Button> */}
        </div>
      </MobileNav>
    </Navbar>
    // <Disclosure as="nav" className="border-b border-gray-300">
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto w-full px-2 md:px-6 lg:px-8 fixed z-50 bg-white drop-shadow-lg">
    //         <div className="flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
    //             {/* Mobile menu button*/}
    //             <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </Disclosure.Button>
    //           </div>
    //           <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
    //             <Link to={'/'}>
    //                 <div className="flex flex-shrink-0 items-center">
    //                   <img
    //                     className="block h-8 w-auto lg:hidden"
    //                     src="/top-small-logo-blue.png"
    //                     alt="Your Company"
    //                   />
    //                   <img
    //                     className="hidden h-8 w-auto lg:block"
    //                     src="/top-logo-blue.png"
    //                     alt="Your Company"
    //                   />
    //                 </div>
    //             </Link>
    //             <div className="hidden md:ml-6 md:block">
    //               <div className="flex space-x-4">
    //                 {navigation.map((item) => (
    //                   <a
    //                     key={item.name}
    //                     href={item.href}
    //                     className={classNames(
    //                       item.current ? 'text-secondary' : 'text-gray-700 hover:text-primary ',
    //                       'px-3 py-2 rounded-md text-md font-medium'
    //                     )}
    //                     aria-current={item.current ? 'page' : undefined}
    //                   >
    //                     {item.name}
    //                   </a>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="absolute inset-y-0 right-0 items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 hidden md:block">
    //             {/* <button
    //               type="button"
    //               className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    //             >
    //               <span className="sr-only">View notifications</span>
    //               <BellIcon className="h-6 w-6" aria-hidden="true" />
    //             </button> */}
    //             {email && (
    //               <>
    //                 <Link to={'/create'} className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-md font-medium">
    //                   Write
    //                 </Link>
    //                 <Link to='/'>
    //                   <button
    //                     className="px-6 py-2 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary"
    //                     onClick={logout}
    //                   >
    //                       Logout
    //                   </button>
    //                 </Link>
    //               </>
    //             )}
    //             {!email && (
    //               <>
    //                 <Link to="/login" className='text-gray-700 hover:text-primary px-3 py-2 rounded-md text-md font-medium'>
    //                   Sign In
    //                 </Link>
    //                 <Link to='/register'>
    //                   <button className="px-6 py-2 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary">
    //                       Get Started
    //                   </button>
    //                 </Link>
    //               </>
    //             )}
    //           </div>
    //         </div>
    //       </div>

    //       <Disclosure.Panel className="md:hidden">
    //         <div className="space-y-1 px-2 pt-2 pb-3">
    //           {navigation.map((item) => (
    //             <Disclosure.Button
    //               key={item.name}
    //               as="a"
    //               href={item.href}
    //               className={classNames(
    //                 item.current ? 'text-secondary' : 'text-gray-700 hover:text-primary',
    //                 'block px-3 py-2 rounded-md text-base font-medium'
    //               )}
    //               aria-current={item.current ? 'page' : undefined}
    //             >
    //               {item.name}
    //             </Disclosure.Button>
    //           ))}
    //             <a href="/" className='text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium'>
    //                 Sign Up
    //             </a>
    //             <button className="px-6 py-2 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary">
    //                 Get Started
    //             </button>
    //         </div>
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>
  )
}

export default Header;
