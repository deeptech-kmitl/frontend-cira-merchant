import Image from 'next/image';
import { useState } from 'react';
import useSWR from 'swr';

let port = 'http://localhost:3333/v1/auth/login';

const Signin = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { data, mutate } = useSWR(port, fetch);
  async function login() {
    let user = {
      identifier: userName,
      password: password,
    };
    let response = await mutate(
      fetch(port, {
        method: 'POST',
        headers: ,
        body: JSON.stringify(user),
      })
    );
    console.log(response);

    // try {
    //   await mutate(
    //     fetch('/api/todos', {
    //       method: 'POST',
    //       body: JSON.stringify(user)
    //     }),
    //     {
    //       optimisticData: [...data, user],
    //       rollbackOnError: true,
    //       populateCache: newItem => {

    //         return [...data, newItem]
    //       },
    //       revalidate: true
    //     }
    //   )
    // } catch (e) {
    //     return e
    // }
    // const respon = await response.json();
    // console.log(respon);
    console.log(data);
  }
  // let response: Response = await fetch(port, {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // });

  return (
    <div className="h-screen flex justify-center">
      <div className="w-full px-12 max-w-[500px] gap-10 h-auto max-h-[700px] flex flex-col items-center shadow-lg">
        <Image src="/images/cira_logo.png" alt="" width={234} height={92} />
        <button
          type="button"
          className="flex items-center justify-center text-black bg-[#FFFFFF] text-[24px] shadow-lg hover:shadow-blue-500/40 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium text-sm w-full py-2.5 dark:focus:ring-[#4285F4]/55"
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
          Login with Google
        </button>
        <div className="flex items-center gap-2 w-full justify-center">
          <div className="bg-black hidden sm:block w-[120px] max-w-[120px] h-[1px]"></div>
          <p className="leading-3">Or login with Email</p>
          <div className="bg-black hidden sm:block w-[120px] max-w-[120px] h-[1px]"></div>
        </div>
        <div className="w-full flex flex-col gap-5 ">
          <input
            type="text"
            placeholder="Username or Email"
            onChange={(e) => {
              setUserName(e.target.value);
              console.log(userName);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(password);
            }}
          />
          <button
            onClick={login}
            className="bg-[#FCB040] py-2.5 text-white hover:bg-white hover:text-[#FCB040] border border-[#FCB040]"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
