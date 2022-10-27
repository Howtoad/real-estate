//The primary button used on the site.
//Has height and text color, change the bg color and max-w-[] when in use to fit your needs.
const Button = ({ children, css }) => {
  return (
    <button className={css + " " + "h-12 text-white w-full"}>{children}</button>
  );
};

export default Button;
