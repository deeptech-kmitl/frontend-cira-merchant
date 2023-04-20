import { CgSpinner } from 'react-icons/cg';

const LoadingPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-y-4">
        <CgSpinner className="animate-spin w-20 h-20 text-primary-1" />
        <p className="text-primary font-semibold">Loading</p>
      </div>
    </div>
  );
};

export default LoadingPage;
