import { FaPaperPlane } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

const HeaderInfo = () => {
  const styles = {
    headerInfoText: "flex text-lg pl-2",
  };

  const { user } = useUser();

  return (
    <div className="flex w-full bg-primary place-content-center h-16">
      <div className="flex max-w-[1100px] w-full text-white place-self-center">
        <div className="flex">
          <FaPaperPlane size="24px" />
          <p className={styles.headerInfoText}>4000@dinmaegler.com</p>
        </div>
        <div className="flex ml-4">
          <BsFillTelephoneFill size="24px" />
          <p className={styles.headerInfoText}>+45 7070 4000</p>
        </div>
        <div className="flex ml-auto">
          <IoIosPerson size="24px" />
          <Link className={styles.headerInfoText} to="/login">
            {user ? "Log ud" : "Log ind"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
