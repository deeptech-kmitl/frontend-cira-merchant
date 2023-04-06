import { Country } from '@/data/country';
import Image from 'next/image';
import { BsCheck } from 'react-icons/bs';
import FloatButton from '../shared/FloatButton';
import { PlanType } from './Plan';
import { PaymentStep } from './Subscription';

interface Banking {
  value: string;
  image: string;
}

interface Countries {
  country: string;
  code: string;
}

interface Props {
  step: PaymentStep;
  setStep: (step: PaymentStep) => void;
  plan?: PlanType;
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

const Payment = (props: Props) => {
  const { step, setStep, plan } = props;
  return (
    <div className="w-full flex justify-between space-x-10 pt-10">
      <div className="flex flex-col space-y-4">
        {paymentBanking.map((item: Banking, i: number) => (
          <div
            className="flex space-x-4 items-center py-4 px-5 bg-[#fff] border border-[#C4C4C4] rounded-md"
            key={i}
          >
            <input
              type="radio"
              name="bank"
              value={item.value}
              className="border border-"
            />
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
      <div className="bg-[#fff] border border-[#C4C4C4] rounded-md w-full">
        <div className="p-6 divide-y divide-[#000]/10 space-y-4">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <p className="font-semibold">{plan?.title} plan - Monthly Plan</p>
              <p className="font-medium">฿ {plan?.price}</p>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center text-[#404D54] font-medium">
                <div className="pr-1">
                  <BsCheck className="text-[#26C07D] h-6 w-6" />
                </div>
                Setup
              </div>
              <p className="font-medium">฿ {plan?.price}</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 pt-4">
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
            <div className="flex justify-between">
              <p className="font-semibold">Taxes & Fees</p>
              <p className="font-medium text-sm">฿ 0.00</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 pt-4">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Total</p>
              <p className="font-medium text-xl">฿ {plan?.price}</p>
            </div>
            <p className="font-medium text-[#D48A3A]">Have a coupon code?</p>
          </div>
          <div className="pt-28">
            <FloatButton action={() => setStep('complete payment')}>
              <p>Submit Secure Payment</p>
            </FloatButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
