import React, { useState } from 'react';
import { FloatButton, CardFrame } from '.';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {
  const URL = process.env.BACKEND_URL;
  const router = useRouter();

  async function createAccount(values: any) {
    
    try {
      const register = await fetch(`${URL}/v1/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const resSignup = await register.json();

      if (resSignup.message.includes('successfully')) {
        toast.success(resSignup.message);
      } else {
        toast.error('Incorrect Email or Username');
      }

    } catch (error: any) {
      toast.error('Incorrect');
    }
  }

  const validation = Yup.object({
    email: Yup.string()
      .email('* Invalid email')
      .required('* Email is a required field'),
    fullName: Yup.string()
      .required('* Full name is a required field')
      .test(
        'is-full-name',
        '* Please enter both your first and last name',
        function (value) {
          const nameArr = value.split(' ');
          return nameArr.length >= 2;
        }
      ),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        '* Phone is not valid'
      )
      .required('* Phone is a required field')
      .max(10, 'too long'),
    username: Yup.string().required('* Username is a required field'),
    password: Yup.string()
      .min(8, '* You need to be older than 8 to register')
      .required('* Password is a required field')
      .test('passwords-match', '* Password did not match', function (value) {
        return this.parent.confirm === value;
      })
      .test(
        'passwords-match',
        '* Password must contain a minimum of 8 characters with at least one uppercase and one number',
        function (value) {
          return /[A-Z]/.test(value);
        }
      ),
    confirm: Yup.string(),
    toggle: Yup.boolean()
      .required('Confirm Password is a required field')
      .test(
        'correct',
        '* You must agree to the Terms of Service',
        function (value) {
          return value === true;
        }
      ),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      fullName: '',
      phone: '',
      username: '',
      password: '',
      confirm: '',
      toggle: false,
    },
    onSubmit: function (values) {
      createAccount({
        email: values.email,
        fullName: values.fullName,
        phone: values.phone,
        username: values.username,
        password: values.password,
      });
    },
    validationSchema: validation,
  });

  return (
    <div className="w-full md:h-screen h-max md:my-0 my-10 grid lg:grid-cols-2 gap-40 justify-center items-center">
      <CardFrame>
        <div className="flex flex-col space-y-4">
          <p className="flex md:text-2xl text-[23px] font-semibold">
            Create your Account
          </p>
          <p className="text-[#8C939D]">
            Start your website in seconds. Already have an account?
            <span className="text-[#D48A3A]">
              <Link href="#"> Login here.</Link>
            </span>
          </p>
          <div className="hidden lg:inline">
            <button
              className="w-full flex gap-4 p-3 my-4 rounded-xl border border-[#d6d6d6] text-center justify-center items-center"
              onClick={() => {
                router.push('http://localhost:3333/v1/google');
              }}
            >
              <Image
                src="/images/google_logo.png"
                alt=""
                width={30}
                height={30}
              />
              <span className="font-medium">Sign up with Google</span>
            </button>
            <div className="relative flex py-5 items-center font-medium">
              <div className="grow border-t border-[#a6a5a5]"></div>
              <span className="shrink mx-3 text-[#938f8f] text-xl ">or</span>
              <div className="grow border-t border-[#a6a5a5]"></div>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-rows gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid">
                  <label className="block mb-2">Your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                    className={`block w-full rounded-lg border py-2 px-3 ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-400'
                        : 'border-gray-300'
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {(formik.errors.email || formik.errors.fullName) && (
                    <p>
                      <span className="text-white">.</span>
                      {formik.touched.email && (
                        <span className="text-red-400">
                          {formik.errors.email}
                        </span>
                      )}
                    </p>
                  )}
                </div>
                <div className="grid">
                  <label className="block mb-2">Full name</label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="name"
                    className={`block w-full rounded-lg border py-2 px-3 ${
                      formik.touched.fullName && formik.errors.fullName
                        ? 'border-red-400'
                        : 'border-gray-300'
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                  {(formik.errors.email || formik.errors.fullName) && (
                    <p>
                      <span className="text-white">.</span>
                      {formik.touched.fullName && (
                        <span className="text-red-400">
                          {formik.errors.fullName}
                        </span>
                      )}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid">
                  <label className="block mb-2">Phone number</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="phone"
                    maxLength={10}
                    className={`block w-full rounded-lg border py-2 px-3 ${
                      formik.touched.phone && formik.errors.phone
                        ? 'border-red-400'
                        : 'border-gray-300'
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {(formik.errors.phone || formik.errors.username) && (
                    <p>
                      <span className="text-white">.</span>
                      {formik.touched.phone && (
                        <span className="text-red-400">
                          {formik.errors.phone}
                        </span>
                      )}
                    </p>
                  )}
                </div>
                <div className="grid">
                  <label className="block mb-2">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    className={`block w-full rounded-lg border py-2 px-3 ${
                      formik.touched.username && formik.errors.username
                        ? 'border-red-400'
                        : 'border-gray-300'
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  {(formik.errors.phone || formik.errors.username) && (
                    <p>
                      <span className="text-white">.</span>
                      {formik.touched.username && (
                        <span className="text-red-400">
                          {formik.errors.username}
                        </span>
                      )}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid ">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid">
                    <label className="block mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="•••••••"
                      className={`block w-full rounded-lg border py-2 px-3 ${
                        formik.touched.password && formik.errors.password
                          ? 'border-red-400'
                          : 'border-gray-300'
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                  </div>
                  <div className="grid">
                    <label className="block mb-2">Confirm Password</label>
                    <input
                      type="password"
                      name="confirm"
                      id="confirm"
                      placeholder="•••••••"
                      className={`block w-full rounded-lg border py-2 px-3 ${
                        formik.touched.password && formik.errors.password
                          ? 'border-red-400'
                          : 'border-gray-300'
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirm}
                    />
                  </div>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <span className="text-red-400">{formik.errors.password}</span>
                )}
              </div>
            </div>
            <div className="lg:hidden">
              <div className="relative flex py-3 items-center font-medium">
                <div className="grow border-t border-[#a6a5a5]"></div>
                <span className="shrink mx-3 text-[#938f8f] text-xl ">or</span>
                <div className="grow border-t border-[#a6a5a5]"></div>
              </div>
              <button
                className="w-full flex md:gap-4 gap-2 p-3 my-3 rounded-xl border border-[#d6d6d6] text-center justify-center items-center"
                onClick={() => {
                  router.push('http://localhost:3333/v1/google');
                }}
              >
                <Image
                  src="/images/google_logo.png"
                  alt=""
                  width={30}
                  height={30}
                />
                <span className="font-medium md:text-base text-[15px]">
                  Sign up with Google
                </span>
              </button>
            </div>
            <div className="my-5">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name="toggle"
                  className={`flex rounded mt-1 ${
                    formik.touched.toggle && formik.errors.toggle
                      ? 'border-red-400'
                      : 'border-gray-300'
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <p className="text-[#8C939D] ">
                  By signing up, you are creating a Cira core account, and you
                  agree to Cira core’s
                  <span className="text-[#D48A3A]">
                    <Link href="#"> Terms of Use</Link>
                  </span>{' '}
                  and
                  <span className="text-[#D48A3A]">
                    <Link href="#"> Privacy Policy.</Link>
                  </span>
                </p>
              </div>
              {formik.touched.toggle && formik.errors.toggle && (
                <span className="text-red-400">{formik.errors.toggle}</span>
              )}
            </div>
            <FloatButton>
              <p className="font-semibold tracking-wide">Create an account</p>
            </FloatButton>
          </form>
        </div>
      </CardFrame>
      <div className="hidden lg:inline">
        <Image
          src="/images/cira_logo.png"
          width={609}
          height={242}
          style={{ width: 'auto', height: 'auto' }}
          alt=""
        />
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
