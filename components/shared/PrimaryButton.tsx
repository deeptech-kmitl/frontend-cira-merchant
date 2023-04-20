interface Props {
  children: React.ReactNode;
  customClass?: string;
  action?: () => void;
}

const PrimaryButton = ({ children, customClass, action }: Props) => {
  return (
    <button
      className={`bg-primary-1 px-6 py-3 text-white rounded-md ${customClass}`}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
