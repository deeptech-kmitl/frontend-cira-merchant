interface Props {
  children: React.ReactNode;
}

const PrimaryButton = ({ children }: Props) => {
  return (
    <button className="bg-primary-1 px-6 py-3 text-white rounded-md">
      {children}
    </button>
  );
};

export default PrimaryButton;
