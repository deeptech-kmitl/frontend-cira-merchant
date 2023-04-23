import { StoreUserAuth } from '@/lib/store';
import Image from 'next/image';
import Link from 'next/link';
import { PrimaryButton } from '..';

interface Props {
  user: StoreUserAuth | null;
}

const DashBoard = ({ user }: Props) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col space-y-2">
        <h3 className="text-4xl font-medium">Dashboard</h3>
        <p className="text-[#969696]">Good to see you again, {user?.name}</p>
      </div>
      <div className="min-h-[70vh] flex flex-col space-y-6 justify-center items-center text-center">
        <div className="w-40 h-40 relative">
          <Image src="/svgs/subscription.svg" fill alt="" />
        </div>
        <h2 className="font-semibold md:text-4xl text-2xl">
          You don&apos;t have any subscription
        </h2>
        <p className="text-[#9E9E9E]">
          Looks like you haven&apos;t purchased any plan yet
        </p>
        <Link href="subscription" className="md:w-2/6">
          <PrimaryButton customClass="w-full">
            <p>Get it now</p>
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default DashBoard;
