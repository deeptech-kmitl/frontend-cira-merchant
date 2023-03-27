import { CardFrame, FloatButton, GridLayout } from '@/components';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

type state = 'set new password' | 'complete';

export default function Reset() {
  const [step, setStep] = useState<state>('set new password');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const url = process.env.BACKEND_URL;
  const router = useRouter();
  const { token } = router.query;

  const changePassword = () => {
    const formBody = { token: token, newPassword: password };
    fetch(`${url}/v1/auth/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formBody),
    }).then((response) => {
      if (response.ok) {
        setStep('complete');
      }
    });
  };
  //i4mN0taRob0t

  const checkPassword = (pw: string, cf: string) => {
    if (pw.length > 8 && /[A-Z]/.test(pw)) {
      if (pw.match(cf)) {
        setError(false);
        changePassword();
      } else {
        setErrorMessage('password did not match');
        setError(true);
      }
    } else {
      setErrorMessage(
        'password must contain a minimum of 8 characters with at least one uppercase and one number'
      );
      setError(true);
    }
  };

  return (
    <GridLayout>
      <div className="w-full h-screen grid grid-cols-2 gap-40 justify-center items-center">
        <CardFrame>
          {step === 'set new password' ? (
            <div className="flex flex-col space-y-4">
              <Image
                src="/images/cira_logo.png"
                alt=""
                width={130}
                height={69}
                style={{ width: '130px', height: 'auto' }}
              />
              <h4 className="font-bold text-xl">Reset your Password</h4>
              <p className="text-[#737373]">
                Your new password must be different from previous used password.
              </p>
              <label htmlFor="Password" className="font-semibold text-sm">
                Password
              </label>
              <input
                type="password"
                className="border border-[#D2CFCF] bg-[#F9FAFB] rounded-md p-3 placeholder-text-[#8C939D]"
                onChange={(event) => setPassword(event.target.value)}
              />
              <label
                htmlFor="ConfirmPassword"
                className="font-semibold text-sm"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="border border-[#D2CFCF] bg-[#F9FAFB] rounded-md p-3 placeholder-text-[#8C939D]"
                onChange={(event) => setConfirm(event.target.value)}
              />
              <p
                className={`${
                  isError ? 'block' : 'hidden'
                } text-red-600 font-semibold`}
              >
                {errorMessage}
              </p>
              <FloatButton action={() => checkPassword(password, confirm)}>
                <p>Confirm Email</p>
              </FloatButton>
            </div>
          ) : (
            <div className="flex flex-col space-y-4 items-center">
              <BsFillCheckCircleFill className="w-16 h-16  text-green-500 " />
              <h4 className="font-bold text-xl text-center">
                Reset your Password
              </h4>
              <p className="text-[#737373] text-center">
                Your password has been reset successfully. Now login with your
                new password.
              </p>
              <FloatButton action={() => router.push('/login')}>
                <p>Login</p>
              </FloatButton>
            </div>
          )}
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
