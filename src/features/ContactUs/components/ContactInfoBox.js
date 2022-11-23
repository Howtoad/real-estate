const ContactInfoBox = ({ children }) => {
  return (
    <>
      <div className="flex flex-col gap-4 my-[45px] items-center">
        {children}
      </div>
    </>
  );
};

export default ContactInfoBox;
