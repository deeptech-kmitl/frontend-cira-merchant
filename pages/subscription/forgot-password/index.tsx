import { CardFrame, FloatButton, GridLayout } from '@/components';
import Image from 'next/image';

export default function ForgotPassword() {
  return (
    <GridLayout>
      <div className="w-full h-screen grid grid-cols-2 gap-20 justify-center items-center">
        <CardFrame>
          <div className="flex flex-col space-y-4">
            <Image
              src="/images/cira_logo.png"
              alt=""
              width={130}
              height={69}
              style={{ width: '130px', height: 'auto' }}
            />
            <h4 className="font-bold text-xl">Forgot your password?</h4>
            <p className="text-[#737373]">
              Enter your email associated with your account and we&apos;ll send
              an email with instructions to reset your password.
            </p>
            <input
              type="text"
              className="border border-[#D2CFCF] bg-[#F9FAFB] rounded-md p-3 placeholder-text-[#8C939D]"
              placeholder="example@gmail.com"
            />
            <FloatButton>
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
