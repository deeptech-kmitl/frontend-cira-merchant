import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoMdSettings } from 'react-icons/io';
import { IoBag } from 'react-icons/io5';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiBankCard2Line } from 'react-icons/ri';
import { TbReportAnalytics } from 'react-icons/tb';

interface Menu {
  title: string;
  menu: SubMenu[];
}

interface SubMenu {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const SideNav: Menu[] = [
  {
    title: 'main menu',
    menu: [
      {
        icon: <MdSpaceDashboard />,
        title: 'Dashboard',
        path: 'dashboard',
      },
      {
        icon: <RiBankCard2Line />,
        title: 'Top-up',
        path: 'top-up',
      },
      {
        icon: <TbReportAnalytics />,
        title: 'Reports',
        path: 'reports',
      },
      {
        icon: <IoBag />,
        title: 'Subscription',
        path: 'subscription',
      },
    ],
  },
  {
    title: 'general',
    menu: [
      {
        icon: <IoMdSettings />,
        title: 'Settings',
        path: 'settings',
      },
    ],
  },
];

const SideBar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col p-6 space-y-6 ">
      <div className="flex space-x-4">
        <div className="w-14 h-14 relative border border-[#969696]/20 rounded-md">
          <Image src="/favicon.ico" fill alt="cira_image" />
        </div>
        <div className="flex flex-col">
          <p className="text-[#1C1C1C] font-medium text-lg">Cira-Core</p>
          <p className="text-[#969696]">TH-Subscription</p>
        </div>
      </div>
      {SideNav.map((data: Menu, i: number) => (
        <div key={i} className="flex flex-col space-y-2">
          <p className="uppercase text-sm text-[#969696]">{data.title}</p>
          <div>
            {data.menu.map((item: SubMenu, j: number) => (
              <Link
                href={`/subscription/${item.path}`}
                className={`flex space-x-2 items-center text-[#585757] group transition-all ease-in-out hover:bg-[#FFF7E6] rounded-md p-3 ${
                  router.asPath === `/subscription/${item.path}`
                    ? 'bg-[#FFF7E6]'
                    : ''
                }`}
                key={j}
              >
                <div
                  className={`group-hover:text-[#FFC700] ${
                    router.asPath === `/subscription/${item.path}`
                      ? 'text-[#FFC700]'
                      : ''
                  }`}
                >
                  {item.icon}
                </div>
                <p
                  className={`group-hover:text-[#1C1C1C] group-hover:font-medium ${
                    router.asPath === `/subscription/${item.path}`
                      ? 'text-[#1C1C1C] font-medium'
                      : ''
                  }`}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
