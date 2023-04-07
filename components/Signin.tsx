import { useStore } from '@/lib/store';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import GmailLogo from './GmailLogo';
import LoadingPage from './shared/LoadingPage';

interface SignInResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
    username: string;
    role: string;
  };
}

const useAuth = () => {
  return useStore((store) => ({
    setUser: store.setUser,
  }));
};

const Signin = () => {
  const { setUser } = useAuth();
  const router = useRouter();
  const url = process.env.BACKEND_URL;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [correct, setCorrect] = useState(true);
  const [nameEmpty, setNameEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [spinner, setSpinner] = useState(false);

  async function login() {
    const loginData = {
      identifier: userName,
      password: password,
    };

    if (userName && password) {
      await fetch(`${url}/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify(loginData),
      }).then(async (response) => {
        response.ok ? setCorrect(true) : setCorrect(false);

        const resp: SignInResponse = await response.json();
        window.localStorage.setItem('token', resp?.access_token);

        fetch(`${url}/v1/auth`, {
          headers: {
            Authorization: `Bearer ${resp?.access_token}`,
          },
        }).then(async (response) => {
          setSpinner(true);
          setUser(await response.json());
          router.push('/subscription/dashboard');
        });
      });
    }
  }

  return (
    <>
      {!spinner && (
        <div className="flex justify-center gap-12 min-h-screen items-center">
          <div className="p-3 w-full max-w-[800px] lg:p-12 gap-10 max-h-[847px] flex flex-col items-center shadow-lg mb-6">
            <div className="flex flex-col justify-start w-full">
              <div className="w-[234px]">
                <Link href={'/'}>
                  <Image
                    src="/images/cira_logo.png"
                    alt=""
                    width={234}
                    height={92}
                  />
                </Link>
              </div>

              <h1 className="text-2xl font-semibold">Welcome back</h1>
            </div>

            <button
              type="button"
              className="flex gap-4 items-center justify-center border border-[#EDEAEA] rounded-md text-black bg-[#FFFFFF] text-[24px] hover:border-blue-500/40 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm w-full py-2.5 dark:focus:ring-[#4285F4]/55"
              onClick={() => {
                router.push('http://localhost:3333/v1/auth/google');
              }}
            >
              <GmailLogo />
              Sign in with Google
            </button>
            <div className="flex items-center gap-2 w-full justify-center text-[#8C939D]">
              <div className="bg-[#8C939D] block w-[350px] max-w-[350px] h-[1px]"></div>
              <p className="leading-3 min-w-[30px] text-center">Or</p>
              <div className="bg-[#8C939D] block w-[350px] max-w-[350px] h-[1px]"></div>
            </div>
            <div className="w-full flex flex-col gap-5 ">
              {!correct && (
                <p className="text-red-600 text-center">
                  Email, username or password is incorrect.
                </p>
              )}
              <div>
                <input
                  type="text"
                  placeholder="Email/Username"
                  className="border w-full border-[#D2CFCF] bg-[#F9FAFB] rounded-md p-3 placeholder-text-[#8C939D]"
                  onChange={(e) => {
                    if (e.target.value === '') {
                      setNameEmpty(true);
                    } else {
                      setNameEmpty(false);
                    }
                    setUserName(e.target.value);
                  }}
                />
                {nameEmpty && (
                  <p className="text-red-600">
                    Please provide your username/email.
                  </p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="border w-full border-[#D2CFCF] bg-[#F9FAFB] rounded-md p-3 placeholder-text-[#8C939D]"
                  onChange={(e) => {
                    if (e.target.value === '') {
                      setPasswordEmpty(true);
                    } else {
                      setPasswordEmpty(false);
                    }
                    setPassword(e.target.value);
                  }}
                />
                {passwordEmpty && (
                  <p className="text-red-600">Please provide your password.</p>
                )}
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center gap-2 text-[#8C939D]">
                  <input
                    type="checkbox"
                    onChange={() => {
                      setCheck(!check);
                    }}
                  />
                  <p>Remember me</p>
                </div>
                <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="relative w-auto hidden lg:block text-[#D48A3A]"
                  >
                    <h1>Forgot Password ?</h1>
                  </Link>
                </div>
              </div>

              <button
                onClick={() => {
                  if (userName && password) {
                    login();
                  }
                  if (!nameEmpty && !userName) {
                    setNameEmpty(true);
                  }
                  if (!passwordEmpty && !password) {
                    setPasswordEmpty(true);
                  }
                }}
                className="bg-[#FCB040] py-2.5 text-white hover:bg-[#FFFFFF] hover:text-[#FCB040] border border-[#FCB040]"
              >
                Sign in to your account
              </button>
              <p className="text-[#8C939D]">
                Don&apos;t have an account?{' '}
                <Link className="text-[#D48A3A]" href={'/signup'}>
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          <div className="hidden 2xl:flex flex-col justify-center">
            <Image
              src="/images/cira_logo.png"
              alt=""
              width={609}
              height={242}
            />
          </div>
        </div>
      )}
      {spinner && (
        <div className="h-screen w-full justify-center flex items-center">
          <LoadingPage />
        </div>
      )}
    </>
  );
};

export default Signin;
