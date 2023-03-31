interface Props {
  children: React.ReactElement;
  className?: string;
  action?: () => void;
}

const FloatButton = (props: Props) => {
  const { children, action, className } = props;
  return (
    <button
      className={`bg-[#FCB040] w-full text-white shadow-md shadow-[#FCB040]/30 py-3 rounded-md disabled:bg-slate-400 disabled:text-slate-100 disabled:shadow-none disabled:border-slate-200 ${className}`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default FloatButton;
