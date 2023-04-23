import { Switch } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import { PaymentStep } from './Subscription';
interface Props {
  step?: PaymentStep;
  setStep: (step: PaymentStep) => void;
  plan?: PlanType;
  setPlan: (plan: PlanType) => void;
  check: boolean;
  setCheck: (check: boolean) => void;
}

export interface PlanType {
  title: string;
  subTitle: string;
  price: string;
  feature: any;
}

const data: PlanType[] = [
  {
    title: 'Education',
    subTitle: 'Lorem',
    price: '0',
    feature: [
      '50 Payload outputs for AI blocks AI output with watermark',
      'Unlimited flows',
      'GPU model training',
    ],
  },
  {
    title: 'Startup',
    subTitle:
      'For small teams who want to start using Deep learning AI to integrate with business process',
    price: '599',
    feature: [
      'Unlimited Payload outputs for AI blocks',
      'Unlimited flows',
      'GPU model training',
      'Inference model with maximum 2 stages',
    ],
  },
  {
    title: 'Professional',
    subTitle: 'Most Popular',
    price: '4199',
    feature: [
      'Unlimited Payload outputs for AI blocks',
      'Unlimited flows',
      'GPU model training',
      'GPU Inference (Unlimited model)',
      'CPU Inference (Unlimited)',
    ],
  },
  {
    title: 'Enterprise',
    subTitle: 'Lorem',
    price: 'Contact us',
    feature: [
      'Unlimited Payload outputs for AI blocks',
      'Unlimited flows',
      'GPU model training',
      'GPU Inference (Unlimited model)',
      'CPU Inference (Unlimited)',
      'Industrial commercial devices plugin',
    ],
  },
];

const Plan = (props: Props) => {
  const { step, setStep, plan, setPlan, check, setCheck } = props;
  const [choose, setChoose] = useState('Startup');
  const [enabled, setEnabled] = useState(false)
  return (
    <div className="flex flex-col gap-y-6">
      
      <div className="flex items-center justify-end gap-x-2">
        <p>Monthly</p>
        <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={() => {
          setCheck(!check);
        }}
        className={`${enabled ? 'bg-[#FCB040]/40' : 'bg-[#FFFFFF]'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-[#FCB040] shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
        <p>Yearly</p>
      </div>

      <div className="grid min-[900px]:grid-cols-3 bg-[#FFFFFF] shadow-md rounded-lg divide-[#CDCDCD] max-[900px]:divide-y-2 min-[900px]:divide-x-2">
        <div className="flex flex-col col-span-2 gap-y-4 p-8">
          <h1 className="text-20">Choosing a pricing plan:</h1>
          <div className="grid max-[900px]:grid-rows-4 min-[900px]:grid-cols-4 border border-[#A1A1A1] text-center max-[900px]:h-[200px] min-[900px]:h-[55px] divide-[#A1A1A1] max-[900px]:divide-y-2 min-[900px]:divide-x-2 rounded-lg">
            {data.map((item: PlanType, i: number) => (
              <div
                key={i}
                className={`h-full flex items-center justify-center ${
                  choose === item.title
                    ? 'bg-[#FFB800] text-[#FFFFFF]'
                    : 'hover:bg-[#FFB800]/50'
                } transition-all cursor-pointer`}
                onClick={() => {
                  setChoose(item.title);
                }}
              >
                <p className='text-sm lg:text-md xl:text-lg'>{item.title}</p>
              </div>
            ))}
          </div>
          <div>
            {data.map((item: PlanType) => (
              <div
                key={item.title}
                className={`${
                  item.title !== choose && 'hidden'
                } flex flex-col gap-6`}
              >
                <div className="flex flex-col gap-y-2">
                  <p>{item.title} Details:</p>
                  <p className="text-[#737373]">{item.subTitle}</p>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {item.feature.map((feat: any, i: number) => (
                    <div key={i} className="flex gap-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#00CB14"
                          className="w-6 h-6"
                        >
                          <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                        </svg>
                      </div>
                      <div>{feat}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex max-[900px]:flex-col max-[900px]:col-span-2 p-8">
          {data.map((item: PlanType) => (
            <div
              key={item.title}
              className={`${
                item.title !== choose && 'hidden'
              } flex flex-col gap-y-4`}
            >
              <p className="text-lg">{item.title} (Web only)</p>
              <div>
                <p
                  className={`${
                    item.title === 'Enterprise' && 'hidden'
                  } text-[#646464]`}
                >
                  Start at
                </p>
                {item.title !== 'Enterprise' ? (
                  <p className="text-3xl font-bold">
                    {check
                      ? Math.round(parseInt(item.price) * 0.9)
                      : item.price}
                      {}
                    ฿/month
                  </p>
                ) : (
                  <p className="text-3xl font-bold">{item.price}</p>
                )}
              </div>
              <button
                onClick={() => {
                  setStep('payment method');
                  setPlan(item);
                }}
                className={`${
                  item.title === 'Enterprise' && 'hidden'
                } w-full py-3 text-md bg-[#FFB800] text-[#FFFFFF] border border-[#FFB800] hover:bg-[#FFFFFF] hover:text-[#FFB800] transition-all rounded-md`}
              >
                Choose now
              </button>
              <div className="flex flex-col gap-y-2">
                <Link className="flex gap-x-2 text-[#FFB800]" href={'#'}>
                  View compare plan
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <p className="text-[#646464]">
                  *To see the monthly limit use after you purchase you will see
                  all usage of plan on the dashboard menu.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Plan;
