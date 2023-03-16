interface props {
  children: React.ReactNode;
}

const GridLayout = ({ children }: props) => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-2 col-end-12">{children}</div>
    </div>
  );
};

export default GridLayout;
