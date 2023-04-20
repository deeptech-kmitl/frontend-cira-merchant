import Image from 'next/image';

const SignUpWithGoogle = () => {
  return (
    <button className="border-[#EDEAEA] border bg-[#F9FAFB] rounded-md">
      <div className="flex space-x-4 px-14 py-3 items-center">
        <Image src="/images/google.png" width={30} height={30} alt="" />
        <p className="text-[#0B0909] font-medium">Sign up with Google</p>
      </div>
    </button>
  );
};

export default SignUpWithGoogle;
