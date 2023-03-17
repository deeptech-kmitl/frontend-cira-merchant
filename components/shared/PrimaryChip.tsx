interface props {
  msg: string;
}
const PrimaryChip = ({ msg }: props) => {
  return (
    <button className="rounded-full py-2 px-8 font-semibold bg-highlighter text-primary-1">
      {msg}
    </button>
  );
};

export default PrimaryChip;
