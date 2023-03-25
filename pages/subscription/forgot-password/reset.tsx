import { CardFrame, FloatButton, GridLayout } from '@/components';
import Image from 'next/image';
import { useState } from 'react';

export default function Reset() {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const checkPassword = (pw: string, cf: string) => {
    if (pw.match(cf)) alert('success');
    else alert('password did not match');
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
            <label htmlFor="ConfirmPassword" className="font-semibold text-sm">
              Confirm Password
            </label>
            <input
              type="password"
              className="border border-[#D2CFCF] bg-[#F9FAFB] rounded-md p-3 placeholder-text-[#8C939D]"
              onChange={(event) => setConfirm(event.target.value)}
            />
            <FloatButton action={() => checkPassword(password, confirm)}>
              <p>Confirm Email</p>
            </FloatButton>
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
