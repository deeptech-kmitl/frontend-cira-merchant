import Link from 'next/link';

interface contacts {
  svg: SVGElement;
  href: string;
}

const Footer = () => {
  return (
    <div className="w-full bg-gray">
      <div className="w-full flex justify-between px-20 py-10 space-x-72">
        <div className="flex flex-col space-y-2  text-[#FCFCFC]">
          <h4 className="font-semibold text-xl">CIRA ROBOTICS CO., LTD</h4>
          <p className="w-4/5">
            Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom
            diska. Jinesade bel när feras redorade i belogi. FAR paratyp i
            muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
          </p>
          <div className="flex space-x-4">
            <Link href="" target="_blank">
              fb
            </Link>
            <Link href="" target="_blank">
              fb
            </Link>
            <Link href="" target="_blank">
              fb
            </Link>
            <Link href="" target="_blank">
              fb
            </Link>
          </div>
        </div>
        <div className="flex w-full space-x-32">
          <div className="flex flex-col space-y-8 text-[#FCFCFC]">
            <h4 className="font-semibold text-xl">Pages</h4>
            <div className="flex flex-col space-y-4">
              <Link href="/">About</Link>
              <Link href="/">Partner</Link>
              <Link href="/">Plans</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-8 text-[#FCFCFC]">
            <h4 className="font-semibold text-xl">Service</h4>
            <div className="flex flex-col space-y-4">
              <Link href="/">Support</Link>
              <Link href="/">Contact</Link>
              <Link href="/">Login</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-8 text-[#FCFCFC]">
            <h4 className="font-semibold text-xl">Contact</h4>
            <div className="flex flex-col space-y-4">
              <Link href="/" className="flex space-x-2">
                <p>p</p>
                <p>(02) 123-4567</p>
              </Link>
              <Link href="/" className="flex space-x-2">
                <p>p</p>
                <p>cirarobotics@gmail.com</p>
              </Link>
              <Link href="/" className="flex space-x-2">
                <p>p</p>
                <p>
                  Office CiRA Lab King Mongkut&apos;s Institute of Technology
                  Ladkrabang 1 Soi Chalongkrung 1Ladkrabang, Bangkok Thailand
                  10520
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Footer;
