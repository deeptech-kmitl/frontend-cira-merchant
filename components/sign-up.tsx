import React, { useState } from 'react';
import { FloatButton } from '.';
import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
  const URL = process.env.BACKEND_URL;
  const [confirmPassword, setconfirmPassword] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phone: '',
    username: '',
    password: '',
  });
  const [policy, setpolicy] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordMinimum, setPasswordMinimum] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const handleInput = (e: { target: { name: any; value: any } }) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;

    if (fieldName === 'phone') {
      fieldValue = e.target.value.slice(0, 10);
    }

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  async function handleClick() {
    setIsTouched(true);
    if (formData.password.length >= 8 && /[A-Z]/.test(formData.password)) {
      if (!formData.password.match(confirmPassword)) {
        setPasswordMatch(true);
      }
    } else {
      setPasswordMinimum(true);
    }

    try {
      const resSignUp = await fetch(`${URL}/v1/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const response = await resSignUp.json();
      if (typeof response.message === 'string') {
        setErrorMsg(response.message);
      }
    } catch (error: any) {
      console.log(error);
    }

  }

  return (
    <div className="w-full h-screen flex items-center">
      <div className="grid lg:grid-cols-2">
        <div className="w-11/12 p-12 flex flex-col gap-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-[#FFFFFF]">
          <p className="flex text-2xl font-semibold">Create your Account</p>
          <p className="mb-4 text-[#8C939D]">
            Start your website in seconds. Already have an account?
            <span className="text-[#D48A3A]">
              <Link href="#"> Login here.</Link>
            </span>
          </p>
          <div
            id="customBtn"
            className="w-full flex gap-4 p-3 rounded-xl border border-[#d6d6d6] text-center justify-center items-center"
          >
            <Image
              src="/images/google_logo.png"
              alt=""
              width={30}
              height={30}
            />
            <span className="font-medium">Sign up with Google</span>
          </div>
          <div className="relative flex py-5 items-center font-medium">
            <div className="grow border-t border-[#a6a5a5]"></div>
            <span className="shrink mx-3 text-[#938f8f] text-xl ">or</span>
            <div className="grow border-t border-[#a6a5a5]"></div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid">
                <label className="block mb-2">Your email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="rounded-lg"
                  placeholder="email"
                  value={formData.email}
                  onChange={handleInput}
                />
              </div>
              <div className="grid">
                <label className="block mb-2">Full name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="rounded-lg"
                  placeholder="name"
                  value={formData.fullName}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid">
                <label className="block mb-2">Phone number</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="rounded-lg"
                  placeholder="phone"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleInput}
                />
              </div>
              <div className="grid">
                <label className="block mb-2">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="rounded-lg"
                  placeholder="username"
                  value={formData.username}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid">
                <label className="block mb-2">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="rounded-lg"
                  placeholder="•••••••"
                  value={formData.password}
                  onChange={handleInput}
                />
              </div>
              <div className="grid">
                <label className="block mb-2">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="rounded-lg"
                  placeholder="•••••••"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2 my-4">
            <input
              type="checkbox"
              className="flex rounded mt-1"
              onClick={() => setpolicy(!policy)}
            />
            <p className="text-[#8C939D]">
              By signing up, you are creating a Cira core account, and you agree
              to Cira core’s
              <span className="text-[#D48A3A]">
                <Link href="#"> Terms of Use</Link>
              </span>{' '}
              and
              <span className="text-[#D48A3A]">
                <Link href="#"> Privacy Policy.</Link>
              </span>
            </p>
          </div>

          {isTouched && (
            <>
              {passwordMatch && (
                <p className="text-red-500">* password did not match</p>
              )}
              {passwordMinimum && (
                <p className="text-red-500">
                  * password must contain a minimum of 8 characters with at
                  least one uppercase and one number
                </p>
              )}
              {!policy && (
                <p className="text-red-500">
                  * You must agree to the Terms of Service
                </p>
              )}
              {errorMsg && <p className="text-red-500">* {errorMsg}</p>}
            </>
          )}

          <FloatButton action={handleClick}>
            <p className="font-semibold tracking-wide">Create an account</p>
          </FloatButton>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/images/cira_logo.png"
            width={609}
            height={242}
            style={{ width: 'auto', height: 'auto' }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
