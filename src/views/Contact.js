import Heading from "../components/Heading";

const Contact = () => {
  return (
    <>
      <Heading title="Kontakt os" />
      <section className="grid max-w-[1110px] mx-auto my-[120px]">
        <div className="col-start-1 col-end-4 row-start-1 row-end-2">
          <p className="text-3xl text-heading_2 my-4">
            Vi sidder klar til at besvare dine spørgsmål
          </p>
          <div className="h-[2px] w-[110px] border-2 border-primary border-solid my-4"></div>
          <p className="text-heading_2 text-lg mt-8">
            Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
            med at sælge sin bolig.
          </p>
          <p className="text-heading_2 text-lg mb-8">
            Vores medarbejdere sider klar alle ugens dage til at svare på dine
            spørgsmål.
          </p>
        </div>
        <div className="col-start-1 col-end-3 row-start-2 row-end-3"></div>
        <div className="col-start-3 col-end-4 row-start-2 row-end-3"></div>
      </section>
    </>
  );
};

export default Contact;