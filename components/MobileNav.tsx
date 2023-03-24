import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface navTab {
  title: string;
  href: string;
}

const MobileNav = ({ tab }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className={`${
          isOpen ? 'hidden' : 'inline-flex'
        } items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200`}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="#FCB040"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <div
        className={`${
          isOpen ? 'translate-x-[0vh]' : '-translate-x-[100vh]'
        } w-fit h-screen transition-all ease-in-out absolute left-0 top-0 bg-[#c4c4c4]/20 backdrop-blur-md`}
      >
        <div className="px-4">
          <div className="w-full flex justify-between items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 mt-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="#c4c4c4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link href="/" className="relative h-[65px] w-[90px]">
              <Image
                src="/images/cira_logo.png"
                fill
                alt=""
                priority
                sizes="65px"
              />
            </Link>
          </div>
          <div className="flex flex-col space-y-4 w-[20vh] py-6 px-4">
            {tab.map((item: navTab, i: number) => (
              <Link href={item.href} key={i} className="py-2 text-sm">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
