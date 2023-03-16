import Image from 'next/image';
import {
  BsFillCreditCard2BackFill,
  BsFillRocketTakeoffFill,
} from 'react-icons/bs';
import { PrimaryButton } from '..';

const Hero = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex justify-center py-32 md:py-40">
        <div className="lg:w-3/5 flex flex-col justify-center items-center text-center space-y-14">
          <h1 className="text-3xl md:text-6xl font-bold inline-block bg-gradient-to-r from-[#9A5F06] via-[#BE911F] via-[#FCB040] to-[#E4D395] bg-clip-text text-transparent md:leading-[72px]">
            Everything you need to grow your business
          </h1>
          <p className="md:w-4/5 text-[#737373]">
            CIRA does everything you need to start and grow your business.
            Attract clients through engaging face detection and simplify your
            business operations.
          </p>
          <PrimaryButton>
            <p>Get Started With CiRA Today</p>
          </PrimaryButton>
          <div className="flex space-x-6">
            <div className="flex space-x-2 items-center">
              <div className="p-2 bg-primary-1/20 rounded-full text-primary-1">
                <BsFillCreditCard2BackFill />
              </div>
              <p className="text-sm text-primary-1">
                Support many payment methods.
              </p>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="p-2 bg-primary-1/20 rounded-full text-primary-1">
                <BsFillRocketTakeoffFill />
              </div>
              <p className="text-sm text-primary-1">
                Get free trial for all user.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:min-h-screen py-32">
        <div className="absolute left-3/4">
          <Image src="/svgs/skeleton.svg" width={200} height={200} alt="" />
        </div>
        <div className="flex justify-center">
          <Image src="/images/cira_logo.png" width={730} height={516} alt="" />
        </div>
        <div className="absolute right-3/4">
          <Image src="/svgs/skeleton.svg" width={200} height={200} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
