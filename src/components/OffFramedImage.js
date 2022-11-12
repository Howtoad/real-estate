const OffFramedImage = (props) => {
  return (
    <>
      <div className="grid max-w-[480px] w-[480px] h-[502px]">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2">
          <img src={props.src} alt={props.alt}></img>
        </div>
        <div className="border-[12px] border-primary max-w-[447px] h-[472px] w-full col-start-1 col-end-2 row-start-1 row-end-2 place-self-end grid">
          <div
            className={
              props.cornerCss +
              " " +
              "text-white text-center max-w-[210px] pb-10 pt-10 bottom-0 right-0 h-[210px] place-self-end"
            }
          >
            <h2 className="font-bold text-6xl pt-">{props.cornerBold}</h2>
            <p className="text-2xl">{props.cornerText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffFramedImage;
