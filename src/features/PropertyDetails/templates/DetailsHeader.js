import { IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import ModalWindow from "../components/ModalWindow";
import { useState } from "react";
import Gallery from "../components/Gallery";

const DetailsHeader = ({ houseInfo }) => {
  const [showModalWindow, setShowModalWindow] = useState();
  const [modalContent, setModalContent] = useState();

  const iconCss = "w-auto h-[50px] text-gray-500 mx-4 paragraph_2";
  const buildingPlan = (
    <div>
      <img src={houseInfo?.floorplan?.url} alt="Floorplan" />
    </div>
  );

  const map = (
    <>
      <iframe
        src={
          "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d9010.26635989766!2d" +
          houseInfo?.long +
          "!3d" +
          houseInfo?.lat +
          "!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdk!4v1667300649685!5m2!1sen!2sdk"
        }
        width="800"
        height="600"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
  return (
    <>
      <ModalWindow
        showModalWindow={showModalWindow}
        setShowModalWindow={setShowModalWindow}
      >
        {modalContent}
        <div className="flex mx-auto">
          <IoImageOutline
            className={iconCss + " text-background"}
            onClick={() => {
              setModalContent(<Gallery images={houseInfo?.images} />);
            }}
          />
          <RiStackLine
            className={iconCss + " text-background"}
            onClick={() => {
              setModalContent(buildingPlan);
            }}
          />
          <IoLocationOutline
            className={iconCss + " text-background"}
            onClick={() => {
              setModalContent(map);
            }}
          />
          <AiOutlineHeart className={iconCss} />
        </div>
      </ModalWindow>
      <div className="mx-auto mt-[39px] w-full max-w-[1110px] flex justify-between border-solid border-b-2">
        <div className="mb-4">
          <h2 className="font-bold mb-2 text-lg text-primary">
            {houseInfo?.adress1} {houseInfo?.adress2}
          </h2>
          <h2 className="font-bold text-lg text-primary">
            {houseInfo?.postalcode} {houseInfo?.city}
          </h2>
        </div>
        <div className="flex">
          <IoImageOutline
            className={iconCss}
            onClick={() => {
              setShowModalWindow(true);
              setModalContent(<Gallery images={houseInfo?.images} />);
            }}
          />
          <RiStackLine
            className={iconCss}
            onClick={() => {
              setShowModalWindow(true);
              setModalContent(buildingPlan);
            }}
          />
          <IoLocationOutline
            className={iconCss}
            onClick={() => {
              setShowModalWindow(true);
              setModalContent(map);
            }}
          />
          <AiOutlineHeart className={iconCss} />
        </div>
        <h3 className="font-bold text-2xl text-primary">
          Kr. &nbsp;
          {houseInfo?.price ? houseInfo?.price.toLocaleString() : "--"}
        </h3>
      </div>
    </>
  );
};

export default DetailsHeader;
