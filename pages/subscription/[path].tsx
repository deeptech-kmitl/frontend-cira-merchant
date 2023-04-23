import {
  DashBoard,
  EducationVerify,
  Reports,
  Settings,
  SideBar,
  Subscription,
  UserBar,
} from '@/components';
import TopUp from '@/components/subscription/TopUp';
import { useStore } from '@/lib/store';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';

export interface User {
  id: string;
  email: string;
  role: string;
  name: string;
}

interface Components {
  path: string;
  component: React.ReactNode;
}

const useAuth = () => {
  return useStore((store) => ({
    user: store.user,
  }));
};

const SubscriptionMod = () => {
  const { user } = useAuth();
  const [toggleMenu, setToggleMenu] = useState(false);
  const TabComponents: Components[] = [
    {
      path: 'dashboard',
      component: <DashBoard user={user} />,
    },
    {
      path: 'top-up',
      component: <TopUp />,
    },
    {
      path: 'reports',
      component: <Reports />,
    },
    {
      path: 'subscription',
      component: <Subscription user={user} />,
    },
    {
      path: 'education-verification',
      component: <EducationVerify user={user} />,
    },
    {
      path: 'settings',
      component: <Settings user={user} />,
    },
  ];

  const router = useRouter();
  const { path } = router.query;

  useEffect(() => {
    if (!user) {
      router.push('/sign-in');
    }
  });

  return (
    <div className="w-full h-screen grid grid-cols-12">
      <div className="hidden lg:block col-span-2 overflow-hidden">
        <SideBar />
      </div>
      <div
        className={`absolute z-40 col-span-full -translate-x-[100vw] h-screen w-screen bg-[#f5f5f5] transition-all ease-in-out ${
          toggleMenu ? 'translate-x-[0vw]' : ''
        }`}
      >
        <div className="pt-8 px-4">
          <SideBar />
        </div>
      </div>
      <div
        className={`lg:hidden absolute z-50 top-6 transition-all ease-linear duration-200 ${
          toggleMenu ? 'right-6' : 'left-6'
        }`}
      >
        <button className="bg-gray-200/70 rounded-md backdrop-blur-sm">
          {!toggleMenu && (
            <div className="p-2" onClick={() => setToggleMenu(!toggleMenu)}>
              <BsFillMenuButtonWideFill className="text-gray-600/90" />
            </div>
          )}
          {toggleMenu && (
            <div className="p-2" onClick={() => setToggleMenu(!toggleMenu)}>
              <RxCross2 className="text-gray-600/90" />
            </div>
          )}
        </button>
      </div>
      <div className="col-span-full lg:col-span-10 bg-[#F7F7F7] overflow-y-scroll">
        <div className="px-10 py-14 md:p-14">
          {user && <UserBar user={user} />}
          <div className="py-6">
            {TabComponents.map((item: Components, i: number) => (
              <div key={i}>{path === item.path ? item.component : null}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionMod;
