import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileNav from './MobileNav';

interface navTab {
  title: string;
  href: string;
}

const tab: navTab[] = [
  { title: 'Application', href: '/application' },
  { title: 'Service', href: '/service' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'About', href: '/about' },
  { title: 'Contacts', href: '/contacts' },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-between items-center py-8">
      <Link href="/" className="relative h-[65px] w-[90px] hidden lg:block">
        <Image src="/images/cira_logo.png" fill alt="" priority />
      </Link>
      <div className="block lg:hidden">
        <MobileNav tab={tab} />
      </div>
      <ul className="hidden lg:flex space-x-12">
        {tab.map((item: navTab, i: number) => (
          <Link href={item.href} key={i}>
            <li
              className={`${
                router.asPath === item.href ? 'font-bold' : 'text-[#193766]'
              }`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
      <button className="px-5 py-3 bg-[#B66D00]/10 text-primary-1 font-semibold rounded-md">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
