import Image from 'next/image';
import { PrimaryButton } from '..';

interface User {
  name: string;
}

interface Props {
  user: User;
}

const DashBoard = (props: Props) => {
  const { user } = props;
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col space-y-2">
        <h3 className="text-4xl font-medium">Dashboard</h3>
        <p className="text-[#969696]">Good to see you again, {user.name}</p>
      </div>
      <div className="min-h-[70vh] flex flex-col space-y-6 justify-center items-center">
        <div className="w-40 h-40 relative">
          <Image src="/svgs/subscription.svg" fill alt="" />
        </div>
        <h2 className="font-semibold text-4xl">
          You don&apos;t have any subscription
        </h2>
        <p className="text-[#9E9E9E]">
          Looks like you haven&apos;t purchased any plan yet
        </p>
        <PrimaryButton customClass="w-2/6">
          <p>Get it now</p>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default DashBoard;
