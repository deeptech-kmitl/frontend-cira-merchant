import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from 'yup';
import 'yup-phone';
import { CardFrame, FloatButton } from '.';

const Signup = () => {
  const URL = process.env.BACKEND_URL;
  const router = useRouter();

  async function createAccount(values: {
    email: string;
    fullName: string;
    phone: string;
    username: string;
    password: string;
  }) {
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
        router.push('sign-in');
      } else {
        toast.error(resSignup.message);
      }
    } catch (error) {
      toast.error('Incorrect');
    }
  }

  const validation = Yup.object({
    email: Yup.string()
      .required('Email is a required field.')
      .test('is-email', 'Email is not valid.', function (value) {
        return value.includes('@' && '.');
      }),
    fullName: Yup.string()
      .required('Full name is a required field.')
      .test('is-full-name', 'Please enter your last name.', function (value) {
        const nameArr = value.split(' ');
        return nameArr.length >= 2 && nameArr[1] != '';
      }),
    phone: Yup.string()
      .matches(/^\d+$/, 'Phone is not valid.')
      .required('Phone is a required field.'),
    username: Yup.string().required('Username is a required field.'),
    password: Yup.string()
      .min(8, 'You need to be older than 8 to register.')
      .required('Password is a required field.')
      .test('passwords-match', 'Password did not match.', function (value) {
        return this.parent.confirm === value;
      })
      .test(
        'passwords-match',
        'Password must contain a minimum of 8 characters with at least one uppercase and one number.',
        function (value) {
          return /[A-Z]/.test(value);
        }
      ),
    confirm: Yup.string(),
    toggle: Yup.boolean()
      .required('Confirm Password is a required field.')
      .test(
        'correct',
        'You must agree to the Terms of Service.',
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
          <p className="text-[#737373]">
            Start your website in seconds. Already have an account?
            <span className="text-[#D48A3A]">
              <Link href="#"> Login here.</Link>
            </span>
          </p>
          <div className="hidden lg:inline">
            <button
              className="w-full flex gap-4 p-3 my-4 rounded-xl border border-[#d6d6d6] text-center justify-center items-center"
              onClick={() => {
                router.push('http://localhost:3333/v1/auth/google');
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
            <div className="relative flex py-3 items-center font-medium">
              <div className="grow border-t border-[#a6a5a5]"></div>
              <span className="shrink mx-3 text-[#938f8f] text-xl ">or</span>
              <div className="grow border-t border-[#a6a5a5]"></div>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-rows gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid">
                  <label className="block mb-2 h-6 font-semibold">
                    Your email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="email"
                    className={`block w-full border border-[#D2CFCF] bg-[#F9FAFB] rounded-md py-2 px-3 h-12 ${
                      formik.touched.email && formik.errors.email
                        ? 'border-red-400'
                        : 'border-gray-300'
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <p className="md:h-2 h-auto">
                    {((formik.touched.email && formik.errors.email) ||
                      (formik.touched.fullName && formik.errors.fullName)) && (
                      <span>
                        {formik.touched.email && formik.errors.email && (
                          <span className="text-red-600 font-semibold">
                            {formik.errors.email}
                          </span>
                        )}
                      </span>
                    )}
                  </p>
                </div>
                <div className="grid">
                  <label className="block mb-2 h-6 font-semibold">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="name"
                    className={`block w-full border border-[#D2CFCF] bg-[#F9FAFB] rounded-md py-2 px-3 h-12 ${
                      formik.touched.fullName && formik.errors.fullName
                        ? 'border-red-400'
                        : 'border-gray-300'
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                  />
                  <p className="md:h-2 h-auto">
                    {((formik.touched.email && formik.errors.email) ||
                      (formik.touched.fullName && formik.errors.fullName)) && (
                      <span>
                        {formik.touched.fullName && formik.errors.fullName && (
                          <span className="text-red-600 font-semibold">
                            {formik.errors.fullName}
                          </span>
                        )}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="grid">
                  <label className="block mb-2 h-6 font-semibold">
                    Phone number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="phone"
                    maxLength={10}
                    className={`block w-full border border-[#D2CFCF] bg-[#F9FAFB] rounded-md py-2 px-3 h-12 ${
                      formik.touched.phone && formik.errors.phone
                        ? 'border-red-400'
                        : 'border-gray-300'
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  <p className="md:h-2 h-auto">
                    {((formik.touched.phone && formik.errors.phone) ||
                      (formik.touched.username && formik.errors.username)) && (
                      <span>
                        {formik.touched.phone && formik.errors.phone && (
                          <span className="text-red-600 font-semibold">
                            {formik.errors.phone}
                          </span>
                        )}
                      </span>
                    )}
                  </p>
                </div>
                <div className="grid">
                  <label className="block mb-2 h-6 font-semibold">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    className={`block w-full border border-[#D2CFCF] bg-[#F9FAFB] rounded-md py-2 px-3 h-12 ${
                      formik.touched.username && formik.errors.username
                        ? 'border-red-400'
                        : 'border-gray-300'
                    }`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  <p className="md:h-2 h-auto">
                    {((formik.touched.phone && formik.errors.phone) ||
                      (formik.touched.username && formik.errors.username)) && (
                      <span>
                        {formik.touched.username && formik.errors.username && (
                          <span className="text-red-600 font-semibold">
                            {formik.errors.username}
                          </span>
                        )}
                      </span>
                    )}
                  </p>
                </div>
              </div>
              <div className="grid ">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid">
                    <label className="block mb-2 h-6 font-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="•••••••"
                      className={`block w-full border border-[#D2CFCF] bg-[#F9FAFB] rounded-md py-2 px-3 h-12 ${
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
                    <label className="block mb-2 h-6 font-semibold">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirm"
                      id="confirm"
                      placeholder="•••••••"
                      className={`block w-full border border-[#D2CFCF] bg-[#F9FAFB] rounded-md py-2 px-3 h-12 ${
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
                <p className="h-auto">
                  {formik.touched.password && formik.errors.password && (
                    <span className="text-red-600 font-semibold">
                      {formik.errors.password}
                    </span>
                  )}
                </p>
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
                  router.push('http://localhost:3333/v1/auth/google');
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
                <p className="text-[#737373] ">
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
              <p className="md:h-5 h-auto">
                {formik.touched.toggle && formik.errors.toggle && (
                  <span className="text-red-600 font-medium">
                    {formik.errors.toggle}
                  </span>
                )}
              </p>
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

export default Signup;
