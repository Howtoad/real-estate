import { Link } from "react-router-dom";
const HeaderNav = () => {
  const styles = {
    headerLink: "text-lg text-paragraph",
  };
  return (
    <div>
      <div>
        <div>
          <img
            src="/images\real-estate\logo.png"
            alt="Image of the company logo"
          ></img>
        </div>
        <div>
          <Link to="/sales">boliger til salg</Link>
          <Link to="/realtors">mæglere</Link>
          <Link to="/favorites">mine favoritter</Link>
          <Link to="/contact">kontakt os</Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
