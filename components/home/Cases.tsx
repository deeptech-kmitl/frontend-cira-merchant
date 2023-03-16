import { BsCircleFill } from 'react-icons/bs'
import { PrimaryButton } from '..';

interface buttonColor{
  color: string;
}

const buttonColors: buttonColor[] = [{color: "text-[#FC1F6F]"}, {color: "text-[#FFCC18]"}, {color: "text-[#1DF359]"}]

const Cases = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-screen absolute left-0 bg-[#8F9398]"></div>
      <div className="relative z-10 flex flex-col space-y-12">
        <div className="h-24"/>
        <div className="flex flex-col space-y-5 justify-center items-center">
          <div className="p-3 font-bold tracking-widest rounded-full bg-white/20">
            <span className="text-white">PREVIEW</span>
          </div>
          <p className="w-1/2 text-center font-medium text-2xl text-white">Programming with Data flow just Drag & Drops Tools make fast development and high performance</p>
        </div>
        <div className="w-full h-full flex justify-center">
          <div className="flex flex-col w-[810px] h-[505px] space-y-4 p-6 bg-white/10 rounded-3xl drop-shadow-2xl">
            <div className="flex flex-row space-x-3">
              {buttonColors.map((item: buttonColor, i: number) => (
              <BsCircleFill className={item.color} key={i}/>))}
            </div>
            <div className='flex justify-center'>
              <iframe className='w-[760px] h-[415px] rounded-2xl' src="https://www.youtube.com/embed/PMF6dcX3f8c" title="FIBO Talk Series EP.13 CIRA CORE คืออะไร และนำไปใช้ประโยชน์ได้อย่างไร" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center text-white">
          <p className="w-1/2">Like the demo above, you can use CIRA CORE with ease, just need to drag the template design you want, design the schema, and execute!</p>
        </div>
        <div className="flex justify-center">
          <PrimaryButton>
            <p>See more usecases</p>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Cases;
