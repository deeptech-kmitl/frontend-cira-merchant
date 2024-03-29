import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';

interface CardDetail {
  highlighted: string;
  period: number;
  price: number;
  points: Points[];
}

interface Points {
  point: string;
}

const data: CardDetail[] = [
  {
    highlighted: '$4.99 setup fee',
    period: 1,
    price: 412.83,
    points: [{ point: 'Plan renews at $11.99/month on 28/04/2023' }],
  },
  {
    highlighted: 'SAVE $108.00',
    period: 1,
    price: 412.83,
    points: [
      { point: 'Plan renews at $11.99/month on 28/04/2023' },
      { point: 'Free domain for 1st year' },
    ],
  },
  {
    highlighted: 'SAVE $108.00',
    period: 1,
    price: 412.83,
    points: [
      { point: 'Plan renews at $11.99/month on 28/04/2023' },
      { point: 'Free domain for 1st year' },
    ],
  },
  {
    highlighted: 'SAVE $108.00',
    period: 1,
    price: 412.83,
    points: [
      { point: 'Plan renews at $11.99/month on 28/04/2023' },
      { point: 'Free domain for 1st year' },
    ],
  },
];

const Period = () => {
  return (
    <div className="flex items-center justify-between">
      {data.map((item: CardDetail, i: number) => (
        <div
          className="bg-[#fff] rounded-md shadow-lg w-1/5 flex flex-col items-center"
          key={i}
        >
          <div className="-mt-4 py-1 px-4 text-[13px] bg-[#FCBE40] rounded-full text-[#fff] w-fit">
            {item.highlighted}
          </div>
          <div className="p-10 flex flex-col space-y-6 divide-y divide-[#000]/10">
            <div className="flex flex-col space-y-4 text-center">
              <p className="text-[#8C939D] font-semibold">
                {item.period} Month
              </p>
              <p className="text-[#D4953A] text-3xl font-semibold">
                ฿ {item.price}
              </p>
              <p className="text-[#C4C4C4] text-sm">Per user per month</p>
            </div>
            <div className="pt-6">
              {item.points.map((item: Points, j: number) => (
                <div
                  className="text-[#D48A3A] flex space-x-2 items-start justify-start"
                  key={j}
                >
                  <div className="w-4 h-4">
                    <BsCheckLg />
                  </div>
                  <p className="text-[12px] ">{item.point}</p>
                </div>
              ))}
              <button className="mt-4 w-full border border-primary-1">
                <div className="flex items-center justify-between p-2 text-primary-1 shadow-md hover:text-[#fff] hover:bg-primary-1 transition-all ease-in-out text-[12px]">
                  <p>Choose plan</p>
                  <AiOutlineArrowRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Period;
