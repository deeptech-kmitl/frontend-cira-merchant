import { DashBoard, SideBar, UserBar } from '@/components';
import { useStore } from '@/lib/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useAuth = () => {
  return useStore((store) => ({
    user: store.user,
  }));
};

const SubscriptionPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/sign-in');
    }
  });

  return (
    <div className="w-full min-h-screen h-full grid grid-cols-12">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10 bg-[#F7F7F7]">
        <div className="p-14">
          {user && <UserBar user={user} />}
          <div className="py-6">{user && <DashBoard user={user} />}</div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
