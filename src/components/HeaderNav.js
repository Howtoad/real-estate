import { NavLink } from "react-router-dom";
const HeaderNav = () => {
  const styles = {
    headerLink: "text-lg text-paragraph",
  };
  return (
    <div className="flex w-full h-36 place-content-center">
      <div className="flex max-w-[1100px] place-self-center w-full">
        <div>
          <img
            src="/images\real-estate\logo.png"
            alt="Image of the company logo"
          ></img>
        </div>
        <div className="ml-auto place-self-end flex space-x-10">
          <NavLink to="/boliger" className={styles.headerLink}>
            Boliger til salg
          </NavLink>
          <NavLink to="/maeglere" className={styles.headerLink}>
            Mæglere
          </NavLink>
          <NavLink to="/favoritter" className={styles.headerLink}>
            Mine favoritter
          </NavLink>
          <NavLink to="/kontakt" className={styles.headerLink}>
            Kontakt os
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
