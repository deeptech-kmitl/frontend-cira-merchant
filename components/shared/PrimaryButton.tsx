interface Props {
  children: React.ReactNode;
  customClass?: string;
}

const PrimaryButton = ({ children, customClass }: Props) => {
  return (
    <button
      className={`bg-primary-1 px-6 py-3 text-white rounded-md ${customClass}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
