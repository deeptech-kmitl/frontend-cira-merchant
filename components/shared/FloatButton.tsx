interface Props {
  children: React.ReactElement;
}

const FloatButton = ({ children }: Props) => {
  return (
    <button className="bg-[#FCB040] text-white shadow-md shadow-[#FCB040]/30 py-3 rounded-md">
      {children}
    </button>
  );
};

export default FloatButton;
