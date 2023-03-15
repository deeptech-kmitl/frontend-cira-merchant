import Image from 'next/image';
import { BsArrowDown, BsCheck } from 'react-icons/bs';
import { HiOutlineXMark } from 'react-icons/hi2';
import { RiShareBoxLine } from 'react-icons/ri';
import { OutlinedButton, PrimaryButton, PrimaryChip } from '..';

interface license {
  usage: string;
  hasGot: boolean;
}

const licenseList: license[] = [
  {
    usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    hasGot: true,
  },
  {
    usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    hasGot: true,
  },
  {
    usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    hasGot: true,
  },
  {
    usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    hasGot: false,
  },
  {
    usage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    hasGot: false,
  },
];

const CTA = () => {
  return (
    <div className="w-full min-h-screen py-20 flex flex-col items-center">
      <div className="w-full flex justify-between space-x-16">
        <div>
          <div className="absolute left-0">
            <svg
              width="525"
              height="497"
              viewBox="0 0 525 497"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H306.736C318.728 0 329.568 7.14101 334.301 18.159L522.026 455.159C530.531 474.958 516.01 497 494.462 497H0V0Z"
                fill="#FEF2CC"
              />
            </svg>
          </div>
        </div>
        <div className="absolute left-0">
          <Image src="/images/cta.png" width={870} height={610} alt="" />
        </div>
        <div className="flex flex-col space-y-8 w-2/5">
          <h3 className="text-3xl text-dark-brown font-semibold">
            CiRA CORE is Free For{' '}
            <span className="text-primary-1 underline">Personal</span> or
            <span className="text-primary-1 underline"> Commercial Use</span>
          </h3>
          <p className="text-subtitle">
            CiRA CORE is licensed under CC BY XXXX, which means you are free to
            use template designs for personal or commercial purposes with xxxx.
          </p>

          <div className="flex flex-col space-y-6">
            {licenseList.map((item: license, i: number) => (
              <div className="flex space-x-3 items-center" key={i}>
                {item.hasGot ? (
                  <>
                    <div className="p-2 rounded-full bg-[#1EBD88]/10 text-[#1EBD88]">
                      <BsCheck />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2 rounded-full bg-[#EF4646]/10 text-[#EF4646]">
                      <HiOutlineXMark />
                    </div>
                  </>
                )}
                <p>{item.usage}</p>
              </div>
            ))}
          </div>

          <div className="flex space-x-6">
            <OutlinedButton>
              <div className="flex space-x-3">
                <p className="font-bold">Read License</p>
                <RiShareBoxLine />
              </div>
            </OutlinedButton>
            <PrimaryButton>
              <p className="font-bold">Get License</p>
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="w-2/5 py-60 flex flex-col justify-between items-center text-center space-y-8">
        <PrimaryChip msg={'FREE-TRIALS'} />
        <h3 className="text-3xl text-dark-brown font-semibold">
          Get <span className="text-light-brown underline">CiRA CORE</span> Now
        </h3>
        <p className="text-subtitle">
          CiRA CORE is free for student, create Ai Tools for the future, share
          insights and get creative on the internet of things.
        </p>
        <button className="flex items-center text-white space-x-4 bg-primary-1 rounded-md px-14 py-4 font-semibold shadow-lg shadow-primary-1/30">
          <BsArrowDown />
          <p>Get free trials</p>
        </button>
      </div>
    </div>
  );
};

export default CTA;
