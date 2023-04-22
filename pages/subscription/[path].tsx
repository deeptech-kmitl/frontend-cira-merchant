import {
  DashBoard,
  Reports,
  Settings,
  SideBar,
  Subscription,
  UserBar,
} from '@/components';
import TopUp from '@/components/subscription/TopUp';
import { useStore } from '@/lib/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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
      <div className="col-span-2 overflow-hidden">
        <SideBar />
      </div>
      <div className="col-span-10 bg-[#F7F7F7]  overflow-y-scroll">
        <div className="p-14">
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
