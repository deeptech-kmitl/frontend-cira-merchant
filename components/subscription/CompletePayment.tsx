import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BsCheck } from 'react-icons/bs';
import { PrimaryButton } from '..';
import { PaymentData } from './Subscription';

type PaymentStatus = 'Pending' | 'Success' | 'Failed';

interface User {
  name: string;
}

interface Props {
  user: User;
  paymentInfo: PaymentData;
}

const CompletePayment = (props: Props) => {
  const router = useRouter();
  const { user, paymentInfo } = props;
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('Pending');

  const [delay, setDelay] = useState(900);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    if (paymentStatus === 'Success') {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="w-full h-screen flex space-x-10 pt-10">
      <div className="w-3/6 flex flex-col gap-y-10">
        <div className="h-2/3 flex space-x-4 items-center justify-center py-4 px-5 bg-[#fff] border border-[#C4C4C4] rounded-md">
          <div className="p-6">
            {paymentStatus === 'Pending' && (
              <Image
                src="/images/qrcode.png"
                width={480}
                height={678}
                alt="payment"
              />
            )}
            {paymentStatus === 'Success' && (
              <div className="flex flex-col items-center w-full">
                <BsCheck className="text-[#26C07D] h-48 w-48" />
                <p className="text-2xl font-semibold">Payment Success</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col text-center">
          {paymentStatus === 'Pending' && (
            <>
              <p>Please complete your payment in</p>
              <p className="text-3xl font-semibold py-4">
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')} MINS
              </p>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-10">
        <div className="bg-[#fff] h-2/3 border border-[#C4C4C4] rounded-md w-full">
          <div className="p-6 divide-y divide-[#000]/10 space-y-4">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <p className="font-semibold">Order #123123123123123</p>
                <p className="font-medium">Status</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center text-[#404D54] font-medium">
                  <div className="pr-1">
                    <BsCheck className="text-[#26C07D] h-6 w-6" />
                  </div>
                  {paymentInfo.platform} Method
                </div>
                <p
                  className={`font-medium ${
                    paymentStatus === 'Pending'
                      ? 'text-primary-1'
                      : paymentStatus === 'Success'
                      ? 'text-green-500'
                      : 'text-red-600'
                  }`}
                >
                  {paymentStatus}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-2 pt-4 text-[#32332E] font-medium">
              <p>{paymentInfo.plan}</p>
              <p>
                {user.name} - {paymentInfo.country}
              </p>
              <div className="flex justify-between pt-10 font-medium">
                <p>Taxes & Fees</p>
                <p>฿ 0.00</p>
              </div>
            </div>
            <div className="flex justify-between pb-16 pt-2">
              <p className="font-semibold text-2xl">Total</p>
              <p className="font-medium text-xl">฿ {paymentInfo.price}</p>
            </div>
            <div className="flex flex-col py-6 gap-y-4">
              <p className="text-center text-[#8C939D]">
                Encrypted and Secure Payments
              </p>
              <div className="px-10">
                By checking out you agree with our{' '}
                <Link
                  href=""
                  className="text-primary-1 font-semibold underline"
                >
                  Terms of Service
                </Link>
                . We will process your personal data for the fulfillment of your
                order and other purposes as per our{' '}
                <Link
                  href=""
                  className="text-primary-1 font-semibold underline"
                >
                  Privacy Policy
                </Link>
                . You can cancel recurring payments at any time.
              </div>
            </div>
          </div>
        </div>
        {paymentStatus === 'Pending' && (
          <PrimaryButton action={() => setPaymentStatus('Success')}>
            <p>Complete Payment</p>
          </PrimaryButton>
        )}
        {paymentStatus === 'Success' && (
          <PrimaryButton action={() => router.push('/subscription/dashboard')}>
            <p>Back to Dashboard</p>
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default CompletePayment;
