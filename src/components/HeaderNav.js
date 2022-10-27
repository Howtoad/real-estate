import { NavLink } from "react-router-dom";
const HeaderNav = () => {
  const styles = {
    headerLink: "text-lg text-paragraph",
  };
  return (
    <div className="flex w-full h-36 place-content-center">
      <nav className="flex max-w-[1100px] place-self-center w-full">
        <div>
          <img
            src="/images\real-estate\logo.png"
            alt="Image of the company logo"
          ></img>
        </div>
        <div className="ml-auto place-self-end flex space-x-10">
          <NavLink to="/sales" className={styles.headerLink}>
            Boliger til salg
          </NavLink>
          <NavLink to="/realtors" className={styles.headerLink}>
            Mæglere
          </NavLink>
          <NavLink to="/favorites" className={styles.headerLink}>
            Mine favoritter
          </NavLink>
          <NavLink to="/contact" className={styles.headerLink}>
            Kontakt os
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default HeaderNav;
