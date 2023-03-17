import { BsCircleFill } from 'react-icons/bs';
import { PrimaryButton } from '..';

interface buttonColor {
  color: string;
}

const buttonColors: buttonColor[] = [
  { color: 'text-[#FC1F6F]' },
  { color: 'text-[#FFCC18]' },
  { color: 'text-[#1DF359]' },
];

const Cases = () => {
  return (
    <div className="w-full min-h-screen py-48">
      <div className="reletive flex items-center">
        <div className="absolute left-0 w-full">
          <div className="hidden lg:block">
            <svg
              width="100%"
              height="1373"
              viewBox="0 0 2300 1373"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-1 87.5917L2300 0V1285.41L-1 1373V87.5917Z"
                fill="#8F9398"
              />
            </svg>
          </div>
          <div className="hidden md:block lg:hidden">
            <svg
              width="100%"
              height="1373"
              viewBox="0 0 900 1373"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-1 87.5917L900 0V1285.41L-1 1373V87.5917Z"
                fill="#8F9398"
              />
            </svg>
          </div>
          <div className="block md:hidden">
            <svg
              width="100%"
              height="1373"
              viewBox="0 0 600 1373"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-1 87.5917L600 0V1285.41L-1 1373V87.5917Z"
                fill="#8F9398"
              />
            </svg>
          </div>
        </div>
        <div className="w-full py-20">
          <div className="relative z-10 flex flex-col space-y-12">
            <div className="flex flex-col space-y-5 justify-center items-center">
              <div className="p-3 font-bold tracking-widest rounded-full bg-white/20">
                <span className="text-white">PREVIEW</span>
              </div>
              <p className="md:w-1/2 text-center font-medium text-lg md:text-2xl text-white">
                Programming with Data flow just Drag & Drops Tools make fast
                development and high performance
              </p>
            </div>
            <div className="w-full h-full flex justify-center">
              <div className="flex flex-col md:w-[810px] md:h-[505px] space-y-4 p-6 bg-white/10 rounded-3xl drop-shadow-2xl">
                <div className="flex flex-row space-x-3">
                  {buttonColors.map((item: buttonColor, i: number) => (
                    <BsCircleFill className={item.color} key={i} />
                  ))}
                </div>
                <div className="flex justify-center">
                  <iframe
                    className="w-[300px] h-[200px] md:w-[650px] md:h-[415px] lg:w-[760px] rounded-2xl"
                    src="https://www.youtube.com/embed/PMF6dcX3f8c"
                    title="FIBO Talk Series EP.13 CIRA CORE คืออะไร และนำไปใช้ประโยชน์ได้อย่างไร"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center text-center text-white">
              <p className="md:w-1/2 leading-loose">
                Like the demo above, you can use CIRA CORE with ease, just need
                to drag the template design you want, design the schema, and
                execute!
              </p>
            </div>
            <div className="flex justify-center">
              <PrimaryButton>
                <p>See more usecases</p>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
