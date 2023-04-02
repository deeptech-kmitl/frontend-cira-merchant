import { SideBar, UserBar } from '@/components';
interface User {
  name: string;
}

const Account: User = { name: 'Danupha Khanatheerakul' };

const Subscription = () => {
  return (
    <div className="w-full min-h-screen h-full grid grid-cols-12">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-[#F7F7F7]">
        <div className="p-14">
          <UserBar user={Account} />
          <div className="py-6">
            <h1 className="font-semibold text-4xl">This is dashboard</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
