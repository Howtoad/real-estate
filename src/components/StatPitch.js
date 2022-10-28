const StatPitch = (props) => {
  return (
    <div>
      <div className="grid grid-cols-[50px]">
        <div className="bg-background_fail w-[50px] h-[50px] flex place-content-center pt-2 pb-2 col-start-1 col-end-2 mr-4">
          <img className="max-w-[30px]" src={props.icon} alt="Agent"></img>
        </div>
        <h3 className="text-heading_2 font-medium text-2xl col-start-2 col-end-3 pl-4">
          {props.pitchTitle}
        </h3>
        <p className="max-w-[290px] text-lg text-paragraph col-start-2 col-end-3 pl-4">
          {props.pitchText}
        </p>
      </div>
    </div>
  );
};

export default StatPitch;
