import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import CompletePayment from './CompletePayment';
import Payment from './Payment';
import Plan, { PlanType } from './Plan';

export type PaymentStep =
  | 'choosing plan'
  | 'payment method'
  | 'complete payment';

interface Component {
  title: string;
  component: React.ReactNode;
  prompt: PaymentStep;
}

const Subscription = () => {
  const [step, setStep] = useState<PaymentStep>('choosing plan');
  const [plan, setPlan] = useState<PlanType>();

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
      component: <Plan step={step} setStep={setStep} setPlan={setPlan} />,
      prompt: 'choosing plan',
    },
    {
      title: 'Select payment method',
      component: <Payment step={step} setStep={setStep} plan={plan} />,
      prompt: 'payment method',
    },
    {
      title: 'Pay with promptpay',
      component: <CompletePayment />,
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
                  {step !== 'choosing plan' && (
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