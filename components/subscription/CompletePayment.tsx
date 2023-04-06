import Image from 'next/image';

const CompletePayment = () => {
  return (
    <div className="w-full h-screen flex justify-between space-x-10 pt-10">
      <div className="w-3/6 h-2/3 flex space-x-4 items-center py-4 px-5 bg-[#fff] border border-[#C4C4C4] rounded-md">
        <div className="w-full h-full relative">
          <Image src="/images/qrcode.png" fill alt="payment" />
        </div>
      </div>
      <div className="bg-[#fff] h-2/3 border border-[#C4C4C4] rounded-md w-full">
        <div className="p-6 divide-y divide-[#000]/10 space-y-4"></div>
      </div>
    </div>
  );
};

export default CompletePayment;
