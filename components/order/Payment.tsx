import { Country } from '@/data/country';
import Image from 'next/image';
import { BsCheck } from 'react-icons/bs';

interface Banking {
  value: string;
  image: string;
}

interface Countries {
  country: string;
  code: string;
}

const paymentBanking: Banking[] = [
  {
    value: 'truemoney',
    image: '/bank/true.png',
  },
  {
    value: 'kma',
    image: '/bank/kma.png',
  },
  {
    value: 'promptpay',
    image: '/bank/promptpay.png',
  },
  {
    value: 'ktb',
    image: '/bank/ktb.png',
  },
  {
    value: 'scb',
    image: '/bank/scb.png',
  },
  {
    value: 'kplus',
    image: '/bank/kplus.png',
  },
  {
    value: 'bangkok',
    image: '/bank/bangkok.png',
  },
];

const Payment = () => {
  return (
    <div className="w-full flex justify-between space-x-10">
      <div className="flex flex-col space-y-4">
        {paymentBanking.map((item: Banking, i: number) => (
          <div
            className="flex space-x-4 items-center py-4 px-5 bg-[#fff] border border-[#C4C4C4] rounded-md"
            key={i}
          >
            <input type="radio" value={item.value} className="border border-" />
            <div className="px-5">
              <Image
                src={item.image}
                width={120}
                height={50}
                alt={item.value}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#fff] border border-[#C4C4C4] rounded-md w-full divide-y divide-[#000]/10">
        <div className="p-6">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <p className="font-semibold">Professional plan - 24 Month Plan</p>
              <p className="font-medium">฿ 412.83</p>
            </div>
            <div className="flex justify-between">
              <p className="flex items-center text-[#404D54] font-medium">
                <div className="pr-1">
                  <BsCheck className="text-[#26C07D] h-6 w-6" />
                </div>
                Setup
              </p>
              <p className="font-medium">฿ 42.83</p>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-semibold">Country</p>
            <select
              name="country"
              className="border border-[#D2CFCF] bg-[#F9FAFB] rounded-md p-3"
            >
              {Country.map((item: Countries, i: number) => (
                <option value={item.country} key={i}>
                  {item.country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
