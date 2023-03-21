import Image from 'next/image';

interface img_partner {
  img: string;
}

const img_partners: img_partner[] = [
  {
    img: '/img_partners/Auto-Alliance.png',
  },
  {
    img: '/img_partners/Toyota-Daihatsu.png',
  },
  {
    img: '/img_partners/SYS.png',
  },
  {
    img: '/img_partners/Seagate.png',
  },
  {
    img: '/img_partners/SCG.png',
  },
  {
    img: '/img_partners/KUBOTA.png',
  },
  {
    img: '/img_partners/INDEX.png',
  },
  {
    img: '/img_partners/Ford.png',
  },
  {
    img: '/img_partners/DENSO.png',
  },
  {
    img: '/img_partners/CPF.png',
  },
];

const Partners = () => {
  return (
    <div className="w-full md:h-max h-screen md:mb-48 mb-24 md:bg-[url('/images/hero_bg.png')] bg-top bg-cover flex justify-center items-center">
      <div className="flex flex-col space-y-12 justify-center">
        <div className="flex justify-center">
          <p className="lg:w-2/3 md:w-3/4 text-center text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#9A5F06] via-[#BE911F] via-[#FCB040] to-[#E4D395] bg-clip-text text-transparent leading-[52px]">
            Your favorite companies are our partners.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-20 justify-center items-center fill-current">
            {img_partners.map((item: img_partner, i: number) => (
              <Image src={item.img} alt="" width={120} height={120} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
