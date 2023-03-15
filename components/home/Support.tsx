import Image from 'next/image';
import Link from 'next/link';
import { HiArrowLongRight } from 'react-icons/hi2';

interface tab {
  title: string;
  href: string;
}

const leadingTab: tab[] = [
  { title: 'Contact us On Facebook Page', href: '/' },
  { title: 'Get Help From Community', href: '/' },
  { title: 'Get Help From About CiRA Education', href: '/' },
];

const Support = () => {
  return (
    <div className="w-full min-h-fit py-52 flex justify-between items-center">
      <div className="absolute right-0">
        <Image src="/images/fbpage.png" width={700} height={700} alt="" />
      </div>
      <div className="flex flex-col space-y-6 w-2/5">
        <h3 className="text-dark-brown text-3xl font-semibold">
          Get Support 24/7 on
          <span className="underline"> All Social Media:</span> Facebook,
          Instagram & Twitter
        </h3>
        <p className="text-subtitle">
          Can get support from the customer service and also get some help from
          the huge community.
        </p>
        <div className="divide-[#697B98]/10 divide-y">
          {leadingTab.map((item: tab, i: number) => (
            <Link
              href={item.href}
              target="_blank"
              key={i}
              className="font-semibold py-8 flex justify-between items-center px-8 rounded-md hover:bg-primary-1 hover:shadow-lg hover:shadow-primary-1/50 hover:text-white duration-200 transition-all"
            >
              <p> {item.title} </p>
              <HiArrowLongRight />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
