import Link from 'next/link';
import SignUpWithGoogle from '../SignUpWithGoogle';

const Account = () => {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-[#737373]">
        Already have an account?{' '}
        <Link href="/signin" className="text-primary-1 font-semibold">
          Log in
        </Link>
      </p>
      <div className="flex space-x-4 items-center">
        <input
          type="text"
          placeholder="Email Address"
          className="border border-[#C4C4C4] py-3 px-4 placeholder-[#737373] rounded-md w-2/6"
        />
        <p className="text-[#737373]">Or</p>
        <SignUpWithGoogle />
      </div>
      <p className="text-[#737373]">
        We will not share your information or send spam.
      </p>
    </div>
  );
};

export default Account;
