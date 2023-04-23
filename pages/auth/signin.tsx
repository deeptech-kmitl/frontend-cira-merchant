/* eslint-disable react-hooks/rules-of-hooks */
import { GmailLogo, LoadingPage } from '@/components';
import { useStore } from '@/lib/store';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
interface IProps {}
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
const signin: NextPage = () => {
  const { setUser } = useAuth();
  const url = process.env.BACKEND_URL;
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [correct, setCorrect] = useState(true)
  const [spinner, setSpinner] = useState(false);
  async function signin() {
    const loginData = {
      identifier: email,
      password: password,
    };
    if(email && password){
      await fetch(`${url}/v1/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify(loginData),
      }).then(async (response) => {
        // response.ok ? setCorrect(true) : setCorrect(false);
        if(response.ok){
        setCorrect(true)
        const resp: SignInResponse = await response.json();
        window.localStorage.setItem('token', resp?.access_token);
        setSpinner(true);
        
        fetch(`${url}/v1/auth`, {
          headers: {
            Authorization: `Bearer ${resp?.access_token}`,
          },
        })
        router.push('/subscription/dashboard');
        }else{
          setCorrect(false)
        }
      })
    }
    
  }
    
  return <>
  {!spinner && <div className="w-full min-h-screen bg-gray-50/10 flex flex-col justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <div className="h-32 w-48 relative mx-auto my-4">
          <Image src="/images/cira_logo.png" alt="Picture of the author" fill />
        </div>
        <form>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Email-Address
            </label>
            <input
              id="email"
              type="text"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className="py-2 px-3 border border-gray-300 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
            />
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="border rounded-sm border-gray-300 text-primary-1 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm leading-5 text-gray-900"
              >
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm">
              Forgot your password?
            </a>
          </div>
          {!correct && (
            <div className='text-[#ff0000]'>Your email or password is incorrect.</div>
          )}
        </form>
        {email && password.length >= 8 ? <div className="mt-6">
            <button onClick={() => {
              if(email && password){
                signin()
              }
            }} className={`w-full inline-flex items-center justify-center px-4 py-3 bg-primary-1 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-yellow-700 active:bg-yellow-700 focus:outline-none focus:border-yellow-700 focus:ring focus:ring-yellow-200 disabled:opacity-25 transition`}>
              Sign In
            </button>
          </div> : <div className="mt-6">
            <button disabled onClick={() => {
              signin()
            }} className={`w-full inline-flex items-center justify-center px-4 py-3 bg-primary-1 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-yellow-700 active:bg-yellow-700 focus:outline-none focus:border-yellow-700 focus:ring focus:ring-yellow-200 disabled:opacity-25 transition`}>
              Sign In
            </button>
          </div>}
        
          <div className="flex items-center justify-between mt-5">
            <div className="w-full h-[1px] bg-gray-300"></div>
            <span className="text-sm uppercase mx-6 text-gray-400">Or</span>
            <div className="w-full h-[1px] bg-gray-300"></div>
          </div>
        <div className="my-5">
            <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
            onClick={() => {
              router.push('http://localhost:3333/v1/auth/google');
            }}>
              <GmailLogo />
              <span>Login with Google</span>
            </button>
          </div>
          <div className="mt-6 text-center">
            <Link href="/auth/signup" className="underline">
              Sign up for an account
            </Link>
          </div>
      </div>
    </div>}
    {spinner && (
      <div className="h-screen w-full justify-center flex items-center">
        <LoadingPage />
      </div>
    )}
  </>
};

export default signin;
