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

interface User {
  name: string;
}

const Account: User = { name: 'Danupha Khanatheerakul' };

interface Components {
  path: string;
  component: React.ReactNode;
}

const TabComponents: Components[] = [
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
    component: <Subscription />,
  },
  {
    path: 'settings',
    component: <Settings />,
  },
];

const SubscriptionMod = () => {
  const router = useRouter();
  const { path } = router.query;

  return (
    <div className="w-full min-h-screen h-full grid grid-cols-12">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-[#F7F7F7]">
        <div className="p-14">
          <UserBar user={Account} />
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
