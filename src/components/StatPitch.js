const StatPitch = ({ icon, children }) => {
  return (
    <div>
      <div className="grid grid-cols-[50px]">
        <div className="bg-background_fail w-[50px] h-[50px] flex place-content-center pt-2 pb-2 col-start-1 col-end-2 mr-4">
          <img className="max-w-[30px]" src={icon} alt="Agent"></img>
        </div>
        {children}
      </div>
    </div>
  );
};

export default StatPitch;
