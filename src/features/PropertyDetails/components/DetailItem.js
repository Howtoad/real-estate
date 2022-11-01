const DetailItem = ({ type, children }) => {
  return (
    <div className="flex max-w-[330px] overflow-hidden my-2">
      <p className="w-[180px] overflow-hidden font-medium">{type}</p>
      <h4 className="max-w-[150px] overflow-hidden font-medium">{children}</h4>
    </div>
  );
};

export default DetailItem;
