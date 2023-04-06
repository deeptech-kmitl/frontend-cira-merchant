import {
  DashBoard,
  Reports,
  Settings,
  SideBar,
  Subscription,
  UserBar,
} from '@/components';
import TopUp from '@/components/subscription/TopUp';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface User {
  email: string;
  role: string;
  name: string;
}

interface Components {
  path: string;
  component: React.ReactNode;
}

const SubscriptionMod = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    if (window !== undefined) {
      setData(JSON.parse(localStorage.getItem('UserToken') || ''));
    }
  }, []);
  let Account: User | null = null;
  let TabComponents: Components[] = [];
  if (data) {
    Account = {
      email: data.data.email,
      role: data.data.role,
      name: data.data.username,
    };
    if (Account) {
      TabComponents = [
        {
          path: 'dashboard',
          component: <DashBoard user={Account} />,
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
          component: <Subscription user={Account} />,
        },
        {
          path: 'settings',
          component: <Settings />,
        },
      ];
    }
  }

  const router = useRouter();
  const { path } = router.query;
  return (
    <div className="w-full min-h-screen h-full grid grid-cols-12">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-[#F7F7F7]">
        <div className="p-14">
          {Account && <UserBar user={Account} />}
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
