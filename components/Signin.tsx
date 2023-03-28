import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

let port = 'http://localhost:3333/v1/auth/login';

const Signin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [nameEmpty, setNameEmpty] = useState('hello');
  const [passwordEmpty, setPasswordEmpty] = useState('hello');
  async function login() {
    let user = {
      identifier: userName,
      password: password,
    };
    if (userName != '' && password != '') {
      let response = await fetch(port, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify(user),
      });
      const respon = await response.json();
      console.log(respon);
    }
  }

  return (
    <div className="flex justify-center gap-12 min-h-screen items-center">
      <div className="p-3 w-full max-w-[800px] lg:p-12 gap-10 max-h-[847px] flex flex-col items-center shadow-lg mb-6">
        <Image src="/images/cira_logo.png" alt="" width={234} height={92} />
        <h1>Welcome back</h1>
        <button
          type="button"
          className="flex tect-[19px] items-center justify-center text-black bg-[#FFFFFF] text-[24px] shadow-lg hover:shadow-blue-500/40 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm w-full py-2.5 dark:focus:ring-[#4285F4]/55"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="35px"
            height="35px"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
          Sign in with Google
        </button>
        <div className="flex items-center gap-2 w-full justify-center">
          <div className="bg-black hidden sm:block w-[270px] max-w-[270px] h-[1px]"></div>
          <p className="leading-3 min-w-[150px]">Or login with Email</p>
          <div className="bg-black hidden sm:block w-[270px] max-w-[270px] h-[1px]"></div>
        </div>
        <div className="w-full flex flex-col gap-5 ">
          <div>
            <input
              type="text"
              className="w-full"
              placeholder="Username or Email"
              onChange={(e) => {
                setNameEmpty(e.target.value);
                setUserName(e.target.value);
                console.log(userName);
              }}
            />
            {!nameEmpty && (
              <p className="text-red-600">
                Please provide your username/email.
              </p>
            )}
          </div>
          <div>
            <input
              className="w-full"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPasswordEmpty(e.target.value);
                setPassword(e.target.value);
                console.log(password);
              }}
            />
            {!passwordEmpty && (
              <p className="text-red-600">Please provide your password.</p>
            )}
          </div>
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                onChange={() => {
                  setCheck(!check);
                  console.log(check);
                }}
              />
              <p>Remember me</p>
            </div>
            <div className="flex justify-end">
              <Link href="/" className="relative w-auto hidden lg:block">
                <h1>Forgot Password ?</h1>
              </Link>
            </div>
          </div>

          <button
            onClick={login}
            className="bg-[#FCB040] py-2.5 text-white hover:bg-[#FFFFFF] hover:text-[#FCB040] border border-[#FCB040]"
          >
            Sign in to your account
          </button>
        </div>
      </div>
      <div className="hidden 2xl:flex flex-col justify-center">
        <Image src="/images/cira_logo.png" alt="" width={609} height={242} />
      </div>
    </div>
  );
};

export default Signin;
