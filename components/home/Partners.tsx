import Image from 'next/image';

interface img_partner {
  img: string;
}

const img_partners: img_partner[] = [
  {
    img: '/images/Auto-Alliance.png'
  },
  {
    img: '/images/Toyota-Daihatsu.png'
  },
  {
    img: '/images/SYS.png'
  },
  {
    img: '/images/Seagate.png'
  },
  {
    img: '/images/SCG.png'
  },
  {
    img: '/images/KUBOTA.png'
  },
  {
    img: '/images/INDEX.png'
  },
  {
    img: '/images/Ford.png'
  },
  {
    img: '/images/DENSO.png'
  },
  {
    img: '/images/CPF.png'
  }
]

const Partners = () => {
  return (
    <div className="w-full h-max mb-40 bg-[url('/images/hero_bg.png')]">
      <div className="flex flex-col space-y-12 justify-center">
        <div className="flex justify-center">
          <p className="w-1/3 text-center text-4xl font-bold bg-gradient-to-r from-[#9A5F06] via-[#BE911F] via-[#FCB040] to-[#E4D395] bg-clip-text text-transparent leading-[52px]">Your favorite companies are our partners.</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-5 gap-20 justify-center items-center fill-current">
            {img_partners.map((item: img_partner, i: number) => (
              <Image src={item.img} alt='' width={120} height={120} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Partners;
  