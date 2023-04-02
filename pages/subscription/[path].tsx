import { DashBoard, SideBar, UserBar } from '@/components';
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
          {TabComponents.map((item: Components, i: number) => (
            <div className="py-6" key={i}>
              {path === item.path ? item.component : ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionMod;
