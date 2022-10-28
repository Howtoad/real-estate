const OffFramedImage = (props) => {
  return (
    <>
      <img className="absolute" src={props.src} alt="Hero image"></img>
      <div className=" relative max-w-[447px] h-[472px] border-[12px] border-primary translate-x-7 translate-y-7 w-full">
        <div
          className={
            props.cornerCss +
            " " +
            "text-white text-center max-w-[210px] pb-10 pt-10 absolute bottom-0 right-0"
          }
        >
          <h2 className="font-bold text-6xl pt-">{props.cornerBold}</h2>
          <p className="text-2xl">{props.cornerText}</p>
        </div>
      </div>
    </>
  );
};

export default OffFramedImage;
