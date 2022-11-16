import Heading from "../components/Heading";
import ContactForm from "../features/ContactUs/templates/ContactForm";
import ContactInfo from "../features/ContactUs/templates/ContactInfo";

const Contact = () => {
  return (
    <>
      <Heading title="Kontakt os" />
      <section className="grid max-w-[1110px] mx-auto my-[120px] grid-cols-[30%_30%_40%]">
        <div className="col-start-1 col-end-4 row-start-1 row-end-2">
          <p className="text-3xl text-heading_2 my-4 font-medium">
            Vi sidder klar til at besvare dine spørgsmål
          </p>
          <div className="h-[0px] w-[110px] border-2 border-primary border-solid my-4"></div>
          <p className="text-heading_2 text-lg mt-8">
            Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang
            med at sælge sin bolig.
          </p>
          <p className="text-heading_2 text-lg mb-8">
            Vores medarbejdere sider klar alle ugens dage til at svare på dine
            spørgsmål.
          </p>
        </div>
        <ContactForm />
        <ContactInfo />
      </section>
      <img src="images/real-estate/contact_map.png" alt="Kort til butik" />
    </>
  );
};

export default Contact;
