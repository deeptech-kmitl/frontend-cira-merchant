import { Country } from '@/data/country';
import { StoreUserAuth } from '@/lib/store';
import Image from 'next/image';
import { SetStateAction, useEffect, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { LoadingPage } from '..';
import FloatButton from '../shared/FloatButton';
import { PlanType } from './Plan';
import { PaymentData, PaymentPayload, PaymentStep } from './Subscription';

interface Banking {
  value: string;
  image: string;
}

export interface Countries {
  Name: string;
  Code: string;
}

interface Props {
  setStep: (step: PaymentStep) => void;
  paymentData: PaymentData;
  setPaymentData: (paymentData: PaymentData) => void;
  payload: PaymentPayload;
  setPayload: (payload: PaymentPayload) => void;
  plan?: PlanType;
  yearly: boolean;
  sendPaymentPayload: () => void;
  user?: StoreUserAuth;
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
    value: 'bangkokbank',
    image: '/bank/bangkok.png',
  },
];

const Payment = (props: Props) => {
  const {
    setStep,
    plan,
    yearly,
    payload,
    setPayload,
    setPaymentData,
    sendPaymentPayload,
    user,
  } = props;
  const [paymentPlatform, setPaymentPlatform] = useState('promptpay');
  const [country, setCountry] = useState('');
  const [spinner, setSpinner] = useState(false);

  const onOptionsChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPaymentPlatform(e.target.value);
  };

  useEffect(() => {
    setPayload({
      amount: Number(plan?.price + '00'),
      currency: 'THB',
      type: paymentPlatform,
      customerId: 'cust_test_5vd13tlj6f2tdnz49oy',
      phone: '',
      userId: user?.id,
      email: user?.email,
      name: user?.name,
      items: {
        name: plan ? plan?.title : '',
        amount: Number(plan?.price + '00'),
        quantity: 1,
      },
    });
  }, [paymentPlatform]);

  const ConfirmPaymentOptions = () => {
    setPaymentData({
      platform: paymentPlatform,
      price: plan?.price,
      plan: `${plan?.title} plan - ${
        yearly ? '12 Months Plan' : '1 Month Plan'
      }`,
      country: country,
    });

    if (payload.items.amount !== 0) {
      sendPaymentPayload();
      setSpinner(true);
      setStep('complete payment');
    }
  };

  return (
    <>
      {!spinner && (
        <div className="w-full flex justify-between space-x-10 pt-10">
          <div className="w-2/6 flex flex-col space-y-4">
            {paymentBanking.map((item: Banking, i: number) => (
              <div
                className="flex space-x-4 justify-center items-center h-24 px-5 bg-[#fff] border border-[#C4C4C4] rounded-md"
                key={i}
              >
                <input
                  type="radio"
                  name="bank"
                  value={item.value}
                  className="border border-"
                  onChange={onOptionsChange}
                  checked={paymentPlatform === item.value}
                />
                <div className="px-5">
                  <Image
                    src={item.image}
                    width={150}
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
                  <p className="font-semibold">
                    {plan?.title} plan -{' '}
                    {yearly ? '12 Months Plan' : '1 Month Plan'}
                  </p>
                  <p className="font-medium">
                    ฿{' '}
                    {plan
                      ? yearly
                        ? Math.round(parseInt(plan?.price) * 0.9)
                        : plan?.price
                      : ''}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center text-[#404D54] font-medium">
                    <div className="pr-1">
                      <BsCheck className="text-[#26C07D] h-6 w-6" />
                    </div>
                    Setup
                  </div>
                  <p className="font-medium">free</p>
                </div>
              </div>
              <div className="flex flex-col space-y-4 pt-4">
                <p className="font-semibold">Country</p>
                <select
                  name="country"
                  className="border border-[#D2CFCF] bg-[#F9FAFB] rounded-md p-3"
                  onChange={(e) => setCountry(e.target.value)}
                >
                  {Country.map((item: Countries, i: number) => (
                    <option value={item.Name} key={i}>
                      {item.Name}
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
                  <p className="font-medium text-xl">
                    ฿{' '}
                    {plan
                      ? yearly
                        ? Math.round(parseInt(plan?.price) * 0.9)
                        : plan?.price
                      : ''}
                  </p>
                </div>
                <p className="font-medium text-[#D48A3A]">
                  Have a coupon code?
                </p>
              </div>
              <div className="pt-28">
                <FloatButton
                  action={() => {
                    ConfirmPaymentOptions();
                  }}
                >
                  <p>Submit Secure Payment</p>
                </FloatButton>
              </div>
            </div>
          </div>
        </div>
      )}
      {spinner && (
        <div className="h-screen w-full justify-center flex items-center">
          <LoadingPage />
        </div>
      )}
    </>
  );
};

export default Payment;
