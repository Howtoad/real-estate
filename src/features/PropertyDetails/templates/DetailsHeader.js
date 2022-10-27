import { IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";

const DetailsHeader = ({ houseInfo }) => {
  console.log(houseInfo);

  const iconCss = "w-auto h-[50px] text-gray-500 mx-4";
  return (
    <div className="mx-auto mt-[39px] w-full max-w-[1110px] flex justify-between border-solid border-b-2">
      <div className="mb-4">
        <h2 className="font-bold mb-2 text-lg">
          {houseInfo?.adress1} {houseInfo?.adress2}
        </h2>
        <h2 className="font-bold text-lg">
          {houseInfo?.postalcode} {houseInfo?.city}
        </h2>
      </div>
      <div className="flex">
        <IoImageOutline className={iconCss} />
        <RiStackLine className={iconCss} />
        <IoLocationOutline className={iconCss} />
        <AiOutlineHeart className={iconCss} />
      </div>
      <h3 className="font-bold text-2xl">
        Kr. &nbsp;
        {houseInfo?.price ? houseInfo?.price.toLocaleString() : "--"}
      </h3>
    </div>
  );
};

export default DetailsHeader;
