import { DashBoard, SideBar, UserBar } from '@/components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
interface User {
  email: string;
  role: string;
  name: string;
}
const SubscriptionPage = () => {
  const [data, setData] = useState<any>(null);
  const router = useRouter();
  useEffect(() => {
    if (window !== undefined) {
      if (localStorage.getItem('UserToken') === null) {
        router.push('/sign-in');
      } else {
        setData(JSON.parse(localStorage.getItem('UserToken') || ''));
      }
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
