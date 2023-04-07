import { StoreUserAuth } from '@/lib/store';
import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import CompletePayment from './CompletePayment';
import Payment from './Payment';
import Plan, { PlanType } from './Plan';

export type PaymentStep =
  | 'choosing plan'
  | 'payment method'
  | 'complete payment';

export interface PaymentData {
  platform: string;
  price: string | undefined;
  plan: string;
  country: string;
}

export interface PaymentPayload {
  amount: number;
  currency: string;
  type: string;
  customerId: string;
  phone: string;
  userId?: string;
  email?: string;
  name?: string;
  items: OrderItem;
}

export interface OrderItem {
  name: string;
  amount: number;
  quantity: number;
}

interface Component {
  title: string;
  component: React.ReactNode;
  prompt: PaymentStep;
}

interface Props {
  user: StoreUserAuth | null;
}

export interface PaymentResponse {
  data: PaymentResponseData;
  imageQr: PaymentQr;
}

export interface PaymentResponseData {
  createdAt: string;
  id: string;
  paymentId: string;
  planName: string;
  quantity: number;
  status: string;
  updatedAt: string;
  userId: string;
}

export interface PaymentQr {
  created_at: string;
  deleted: boolean;
  download_uri: string;
  filename: string;
  id: string;
  kind: string;
  livemode: boolean;
  location: string;
  object: string;
}

const Subscription = (props: Props) => {
  const { user } = props;
  const [step, setStep] = useState<PaymentStep>('choosing plan');
  const [check, setCheck] = useState(false);
  const [plan, setPlan] = useState<PlanType>();
  const [paymentData, SetPaymentData] = useState<PaymentData>({
    platform: '',
    price: '',
    plan: '',
    country: '',
  });

  const [payload, setPayload] = useState<PaymentPayload>({
    amount: 0,
    currency: 'THB',
    type: '',
    customerId: '',
    phone: '',
    userId: '',
    email: '',
    name: '',
    items: {
      name: '',
      amount: 0,
      quantity: 0,
    },
  });

  const [paymentPending, setPaymentPending] = useState<PaymentResponse>({
    data: {
      createdAt: '',
      id: '',
      paymentId: '',
      planName: '',
      quantity: 0,
      status: '',
      updatedAt: '',
      userId: '',
    },
    imageQr: {
      created_at: '',
      deleted: false,
      download_uri: '',
      filename: '',
      id: '',
      kind: '',
      livemode: false,
      location: '',
      object: 'document',
    },
  });

  const sendPaymentPayload = () => {
    console.log(payload);
    fetch(`https://app-o6mjk54opa-as.a.run.app/v1/payment/charge`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': '*',
      },
      body: JSON.stringify(payload),
    }).then(async (response) => {
      setPaymentPending(await response.json());
    });
  };

  const prevStep = (current: PaymentStep) => {
    current === 'payment method'
      ? setStep('choosing plan')
      : current === 'complete payment'
      ? setStep('payment method')
      : '';
  };

  const PaymentComponents: Component[] = [
    {
      title: 'Designed for business teams like yours',
      component: (
        <Plan
          step={step}
          setStep={setStep}
          setPlan={setPlan}
          check={check}
          setCheck={setCheck}
        />
      ),
      prompt: 'choosing plan',
    },
    {
      title: 'Select payment method',
      component: (
        <Payment
          user={user ? user : undefined}
          setStep={setStep}
          plan={plan}
          yearly={check}
          paymentData={paymentData}
          setPaymentData={SetPaymentData}
          payload={payload}
          setPayload={setPayload}
          sendPaymentPayload={sendPaymentPayload}
        />
      ),
      prompt: 'payment method',
    },
    {
      title: `Pay with ${paymentData.platform}`,
      component: (
        <CompletePayment
          user={user}
          paymentInfo={paymentData}
          paymentReq={paymentPending}
        />
      ),
      prompt: 'complete payment',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col divide-y divide-black/10">
      <div className="flex flex-col space-y-2 pb-4">
        <h3 className="text-4xl font-medium">Subscription</h3>
        <p className="text-[#969696]">Choose your best for your company</p>
      </div>
      <div className="flex flex-col space-y-6">
        {PaymentComponents.map((item: Component, i: number) => (
          <div key={i}>
            {step === item.prompt && (
              <div className="py-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl">{item.title}</h4>
                  {step !== 'choosing plan' && step !== 'complete payment' && (
                    <button
                      className="flex space-x-2 items-center text-[#7C5A00]"
                      onClick={() => prevStep(item.prompt)}
                    >
                      <BsArrowLeft />
                      <p>Back</p>
                    </button>
                  )}
                </div>
                {item.component}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscription;
