import { StoreUserAuth, useStore } from '@/lib/store';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { TiArrowSortedDown } from 'react-icons/ti';
import LoadingPage from '../shared/LoadingPage';

interface Props {
  user: StoreUserAuth | null;
}

const useAuth = () => {
  return useStore((store) => ({
    setUser: store.setUser,
  }));
};

const UserBar = (props: Props) => {
  const { setUser } = useAuth();
  const router = useRouter();
  const { user } = props;
  const [spinner, setSpinner] = useState(false);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const handleSignout = () => {
    setSpinner(true);
    setUser(null);
    window.localStorage.removeItem('token');
    router.push('/sign-in');
  };

  return (
    <>
      {!spinner && (
        <div className="flex justify-between items-center">
          <div className="flex items-center text-[#969696]">
            <AiOutlineSearch />
            <input
              type="text"
              className="bg-transparent border-none placeholder-[#969696]"
              placeholder="Search"
            />
          </div>
          <div className="flex space-x-4 items-center">
            <div className="text-[#969696]">
              <IoMdNotifications />
            </div>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                  <div className="flex space-x-2 items-center">
                    <div className="bg-blue-100 rounded-full text-blue-500 w-7 h-7 font-medium text-sm flex items-center justify-center">
                      {user?.name.slice(0, 1)}
                    </div>
                    <p className="text-[#1C1C1C] font-medium">{user?.name}</p>
                  </div>
                  <TiArrowSortedDown
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#fff] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <form method="POST" onClick={handleSignout}>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block w-full px-4 py-2 text-left text-sm'
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </form>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      )}
      {spinner && (
        <div className="h-screen w-screen justify-center flex items-center">
          <LoadingPage />
        </div>
      )}
    </>
  );
};

export default UserBar;
