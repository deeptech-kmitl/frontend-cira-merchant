import { CardFrame, FloatButton, GridLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';

type state = 'enter email' | 'send email';

export default function ForgotPassword() {
  const [step, setStep] = useState<state>('enter email');
  const [email, setEmail] = useState('');
  const [isError, setError] = useState(false);

  const submitEmail = () => {
    fetch(`http://localhost:3333/v1/auth/forgot-password/${email}`, {
      method: 'POST',
    }).then((response) => {
      if (response.ok) {
        setStep('send email');
      } else {
        setError(!isError);
      }
    });
  };

  return (
    <GridLayout>
      <div className="w-full h-screen grid grid-cols-2 gap-40 justify-center items-center">
        <CardFrame>
          <div className="flex flex-col space-y-4">
            <Image
              src="/images/cira_logo.png"
              alt=""
              width={130}
              height={69}
              style={{ width: '130px', height: 'auto' }}
            />
            {step === 'enter email' ? (
              <>
                <h4 className="font-bold text-xl">Forgot your password?</h4>
                <p className="text-[#737373]">
                  Enter your email associated with your account and we&apos;ll
                  send an email with instructions to reset your password.
                </p>
                <input
                  type="text"
                  className="border border-[#D2CFCF] bg-[#F9FAFB] rounded-md p-3 placeholder-text-[#8C939D]"
                  placeholder="example@gmail.com"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <p
                  className={`${
                    isError ? 'block' : 'hidden'
                  } text-red-600 font-semibold`}
                >
                  Incorrect email address
                </p>
                <FloatButton action={() => submitEmail()}>
                  <p>Confirm Email</p>
                </FloatButton>
              </>
            ) : (
              <div className="flex flex-col space-y-4">
                <h4 className="font-bold text-xl">Check your mail</h4>
                <p className="text-[#737373]">
                  We have sent a password recover instructions to your email.
                </p>
                <FloatButton>
                  <p>Open your email</p>
                </FloatButton>
                <p className="text-[#737373] font-sm text-center">
                  Skip, I&apos;ll confirm later
                </p>
                <p className="pt-12 text-center">
                  Did not receive the email? Check your spam filter, or{' '}
                  <span className="text-[#D48A3A]">
                    try another email address
                  </span>
                </p>
              </div>
            )}
          </div>
        </CardFrame>
        <div>
          <Image
            src="/images/cira_logo.png"
            alt=""
            width={609}
            height={242}
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
    </GridLayout>
  );
}
