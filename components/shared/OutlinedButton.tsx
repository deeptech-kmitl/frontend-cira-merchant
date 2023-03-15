interface Props {
  children: React.ReactNode;
}

const OutlinedButton = ({ children }: Props) => {
  return (
    <button className="border-2 border-primary-1 px-6 py-4 text-primary-1 rounded-md">
      {children}
    </button>
  );
};

export default OutlinedButton;
