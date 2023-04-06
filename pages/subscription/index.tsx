import { DashBoard, SideBar, UserBar } from '@/components';
import { useEffect, useState } from 'react';
interface User {
  email: string;
  role: string;
  name: string;
}
const SubscriptionPage = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    if (window !== undefined) {
      setData(JSON.parse(localStorage.getItem('UserToken') || ''));
    }
  }, []);
  let Account: User | null = null;
  if (data) {
    Account = {
      email: data.data.email,
      role: data.data.role,
      name: data.data.username,
    };
  }
  return (
    <div className="w-full min-h-screen h-full grid grid-cols-12">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-[#F7F7F7]">
        <div className="p-14">
          {Account && <UserBar user={Account} />}
          <div className="py-6">{Account && <DashBoard user={Account} />}</div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
