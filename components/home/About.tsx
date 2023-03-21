import Image from 'next/image';
import { BiCode } from 'react-icons/bi';
import { BsMegaphone } from 'react-icons/bs';
import { RiCheckboxBlankFill } from 'react-icons/ri';
import { TfiInkPen } from 'react-icons/tfi';

interface benefit {
  // eslint-disable-next-line no-undef
  icon: JSX.Element;
  title: string;
  content: string;
}

interface listBenefit {
  title: string;
  detail: string;
}

interface imageDeepDetect {
  // eslint-disable-next-line no-undef
  image: JSX.Element;
}

interface bg_svg {
  // eslint-disable-next-line no-undef
  image: JSX.Element;
}

const benefits: benefit[] = [
  {
    icon: <TfiInkPen className="w-8 h-8" />,
    title: 'For Engineers',
    content:
      'Engineers and other technical professionals are interested in learning about the latest advancements in robotics and artificial intelligence. ',
  },
  {
    icon: <BiCode className="w-8 h-8" />,
    title: 'For Business',
    content:
      'Business leaders and decision makers are interested in how robotics can help their organizations increase efficiency, reduce costs, and improve safety',
  },
  {
    icon: <BsMegaphone className="w-8 h-8" />,
    title: 'For Educators',
    content:
      'Educators at all levels, from K-12 to higher education, are interested in teaching their students about robotics and artificial intelligence.',
  },
];

const listBenefits: listBenefit[] = [
  {
    title: 'Insights',
    detail:
      'Our templates are designed to help you create content that contains insights on design, coding, or recommendations for the best practices in your industry. With our intelligent design templates, you can communicate your ideas in a visually engaging way.',
  },
  {
    title: 'Promotions',
    detail:
      'Use our templates to create eye-catching product or service promotions and get more potential customers.',
  },
  {
    title: 'Much More',
    detail:
      'Our library of templates includes designs for all types of social media content, from posts to stories to ads.',
  },
];

const imageDeepDetects: imageDeepDetect = {
  image: (
    <Image
      src="/svgs/deepdetect.svg"
      alt=""
      priority
      width={150}
      height={150}
    />
  ),
};

const bg_svgs: bg_svg[] = [
  {
    image: (
      <Image
        src="/svgs/bg-Circle.svg"
        alt=""
        width={350}
        height={350}
        className="absolute top-2/4 right-0 bottom-0"
      />
    ),
  },
  {
    image: (
      <Image
        src="/svgs/bg-Circle.svg"
        alt=""
        width={500}
        height={500}
        className="absolute right-0 bottom-0"
      />
    ),
  },
];

const About = () => {
  return (
    <div className="w-full h-max bg-[#FFFFFF] relative">
      <div className="container mx-auto py-8">
        <div className="flex justify-center">
          <p className="w-6/12 text-center text-2xl text-[#73532C] font-medium">
            dedicated to making our products accessible and affordable to
            businesses of all sizes, so that everyone can benefit from the power
            of robotics.
          </p>
        </div>
        <div className="h-20" />
        <div className="flex grid grid-cols-3 gap-4 ">
          {benefits.map((item: benefit, i: number) => (
            <div className="group" key={i}>
              <div className="grid py-10 rounded-md group-hover:bg-[#F2BD6F] duration-200 transition-all ease-in-out">
                <div className="mx-14 rounded-lg">
                  <div className="w-16 h-16 text-white bg-[#F3BE70] rounded-lg drop-shadow-2xl group-hover:bg-[#FFE5AB] flex justify-center items-center duration-200 transition-all ease-in-out">
                    {item.icon}
                  </div>
                  <p className="my-6 text-lg text-[#9D5B08] font-semibold group-hover:text-white">
                    {item.title}
                  </p>
                  <p className="leading-loose group-hover:text-white">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="h-52" />
        <div className="flex grid grid-cols-2 gap-4">
          <div className="w-full grid">
            <p className="text-2xl text-[#73532C] font-medium">
              Intelligent Design Templates for Social Media Content{' '}
            </p>
            <p className="my-6 text-[#697B98] leading-7">
              With CIRA Robotics, you have access to a library of 80+
              pre-designed templates that are ready to use for your social media
              content. Each template includes 10+ different layouts, designed to
              be easily customizable, allowing you to focus on your content and
              not on the design.
            </p>
            <div className="flex flex-col space-y-4">
              {listBenefits.map((item: listBenefit, i: number) => (
                <p className="leading-7" key={i}>
                  <RiCheckboxBlankFill className="inline text-[#CF9339] mr-2" />
                  <p className="text-[#CF9339] font-bold inline">
                    {item.title}:
                  </p>{' '}
                  {item.detail}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full grid grid-cols-2 px-20 justify-center items-center z-10">
            <div className="flex grid grid-rows-2 space-y-10 justify-center">
              {imageDeepDetects.image}
              {imageDeepDetects.image}
            </div>
            <div className="flex grid items-center justify-end">
              {imageDeepDetects.image}
            </div>
          </div>
        </div>
      </div>
      {bg_svgs.map((item: bg_svg, i: number) => (
        <div key={i}>{item.image}</div>
      ))}
      <div className="h-24" />
    </div>
  );
};

export default About;
