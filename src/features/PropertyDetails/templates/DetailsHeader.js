import { IoImageOutline, IoLocationOutline } from "react-icons/io5";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import ModalWindow from "../components/ModalWindow";
import { useState } from "react";
import Gallery from "../components/Gallery";
import { useUser } from "../../../context/UserContext";

const DetailsHeader = ({ houseInfo }) => {
  const { user, updateFavoriteProperties, isFavoriteProperty } = useUser();
  const [showModalWindow, setShowModalWindow] = useState();
  const [modalContent, setModalContent] = useState();

  const iconCss =
    "w-auto h-[50px] text-gray-500 mx-4 paragraph_2 cursor-pointer";
  const buildingPlan = (
    <div>
      <img src={houseInfo?.floorplan?.url} alt="Floorplan" />
    </div>
  );

  const map = (
    <>
      <iframe
        title={"google maps"}
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
        <div className="flex mx-auto mt-14">
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
          {user && (
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                updateFavoriteProperties(houseInfo?.id);
              }}
            >
              {isFavoriteProperty(houseInfo?.id) ? (
                <AiFillHeart className={iconCss + " text-[#162A41]"} />
              ) : (
                <AiOutlineHeart className={iconCss + " text-background"} />
              )}
            </div>
          )}
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
          {user && (
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                updateFavoriteProperties(houseInfo?.id);
              }}
            >
              {isFavoriteProperty(houseInfo?.id) ? (
                <AiFillHeart className={iconCss + " text-[#162A41]"} />
              ) : (
                <AiOutlineHeart className={iconCss} />
              )}
            </div>
          )}
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
