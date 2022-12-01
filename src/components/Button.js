//The primary button used on the site.
//Has height and text color, change the bg color and max-w-[] when in use to fit your needs.
//Takes in a handleClick function to fit your needs for a function.
const Button = ({ children, css, handleClick }) => {
  return (
    <button onClick={handleClick} className={css + " h-12 text-white w-full"}>
      {children}
    </button>
  );
};

export default Button;
