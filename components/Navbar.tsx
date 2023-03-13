import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface navTab {
  title: string;
  href: string;
}

const tab: navTab[] = [
  { title: 'Home', href: '/' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'About', href: '/about' },
  { title: 'Preview', href: '/preview' },
  { title: 'Contacts', href: '/contacts' },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full flex justify-between items-center py-8">
      <Link href="/" className="relative h-[65px] w-[90px]">
        <Image src="/images/cira_logo.png" fill alt="" />
      </Link>
      <ul className="flex space-x-12">
        {tab.map((item: navTab) => (
          <Link href={item.href} key={item.title}>
            <li
              className={`${
                router.asPath === item.href ? 'font-bold' : 'text-dark/60'
              }`}
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
      <button className="px-5 py-3 bg-primary-dark/10 text-[#F2A341] font-bold rounded-md">
        Purchase
      </button>
    </div>
  );
};

export default Navbar;
