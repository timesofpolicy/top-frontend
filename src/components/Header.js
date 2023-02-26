import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const navigation = [
  { name: 'Dashboard', href: '/', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
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
  return (
    <Disclosure as="nav" className="border-b border-gray-300">
      {({ open }) => (
        <>
          <div className="mx-auto w-full px-2 md:px-6 lg:px-8 fixed z-50 bg-white drop-shadow-lg">
            <div className="flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                <Link to={'/'}>
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="/top-small-logo-blue.png"
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="/top-logo-blue.png"
                        alt="Your Company"
                      />
                    </div>
                </Link>
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-secondary' : 'text-gray-700 hover:text-primary ',
                          'px-3 py-2 rounded-md text-md font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 hidden md:block">
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
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
                      <button className="px-6 py-2 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary">
                          Get Started
                      </button>
                    </Link>
                  </>
                )}
                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-md text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-md text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-md text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-secondary' : 'text-gray-700 hover:text-primary',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
                <a href="/" className='text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium'>
                    Sign Up
                </a>
                <button className="px-6 py-2 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-secondary focus:outline-none focus:bg-secondary">
                    Get Started
                </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Header;
