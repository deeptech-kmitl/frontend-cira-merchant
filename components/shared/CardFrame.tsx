interface Props {
  children: React.ReactElement;
}

const CardFrame = ({ children }: Props) => {
  return (
    <div className="bg-[#fffff] rounded-lg shadow-md">
      <div className="p-14"> {children} </div>
    </div>
  );
};

export default CardFrame;
