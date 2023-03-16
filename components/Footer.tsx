import Link from 'next/link';
import { BsFillTelephoneFill } from 'react-icons/bs';
import {
  FaFacebookF,
  FaInstagram,
  FaLine,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { MdEmail, MdLocationPin } from 'react-icons/md';

interface footerCol {
  header: string;
  menu: menu[];
}

interface menu {
  // eslint-disable-next-line no-undef
  appearedAs: string | JSX.Element;
  href: string;
}

const footerMenu: footerCol[] = [
  {
    header: 'Pages',
    menu: [
      { appearedAs: 'About', href: '/about' },
      { appearedAs: 'Partner', href: '/partner' },
      { appearedAs: 'Plans', href: '/plans' },
    ],
  },
  {
    header: 'Service',
    menu: [
      { appearedAs: 'Support', href: '/support' },
      { appearedAs: 'Contact', href: '/contact' },
      { appearedAs: 'Login', href: '/login' },
    ],
  },
  {
    header: 'Contact',
    menu: [
      {
        appearedAs: (
          <div className="flex space-x-3 items-center">
            <BsFillTelephoneFill />
            <p>(02) 123-4567</p>
          </div>
        ),
        href: '',
      },
      {
        appearedAs: (
          <div className="flex space-x-3 items-center">
            <MdEmail />
            <p>cirarobotics@gmail.com</p>
          </div>
        ),
        href: 'mailto:cirarobotics@gmail.com',
      },
      {
        appearedAs: (
          <div className="flex space-x-3 items-start">
            <div className="w-4 mt-1">
              <MdLocationPin />
            </div>
            <p>
              Office CiRA Lab King Mongkut&apos;s Institute of Technology
              Ladkrabang 1 Soi Chalongkrung 1Ladkrabang, Bangkok Thailand 10520
            </p>
          </div>
        ),
        href: '',
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="w-full bg-gray divide-[#fcfcfc] divide-y">
      <div className="w-full flex lg:flex-row flex-col justify-between px-20 py-14 lg:space-x-72 space-y-20 md:space-y-0">
        <div className="flex flex-col space-y-2  text-[#FCFCFC]">
          <h4 className="font-semibold text-xl">CIRA ROBOTICS CO., LTD</h4>
          <p className="w-4/5">
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
          </p>
          <div className="flex space-x-4 pt-4">
            <Link href="" target="_blank">
              <FaFacebookF />
            </Link>
            <Link href="" target="_blank">
              <FaTwitter />
            </Link>
            <Link href="" target="_blank">
              <FaLinkedinIn />
            </Link>
            <Link href="" target="_blank">
              <FaInstagram />
            </Link>
            <Link href="" target="_blank">
              <FaLine />
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-10 w-full md:space-x-32 md:flex-row md:space-y-0 md:pt-8 lg:pt-0">
          {footerMenu.map((item: footerCol, i: number) => (
            <div className="flex flex-col space-y-8 text-[#FCFCFC]" key={i}>
              <h4 className="font-semibold text-xl">{item.header}</h4>
              <div className="flex flex-col space-y-4">
                {item.menu.map((item: menu, id: number) => (
                  <Link href={item.href} key={id} target="_blank">
                    {item.appearedAs}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between px-20 py-6 space-x-72 text-[#fcfcfc]">
        <p>© 2022 CIRA - Automation and Technology | All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
