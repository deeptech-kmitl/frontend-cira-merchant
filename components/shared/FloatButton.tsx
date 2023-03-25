interface Props {
  children: React.ReactElement;
  action?: () => void;
}

const FloatButton = ({ children, action }: Props) => {
  return (
    <button
      className="bg-[#FCB040] text-white shadow-md shadow-[#FCB040]/30 py-3 rounded-md"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default FloatButton;
