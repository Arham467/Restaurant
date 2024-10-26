import ContactForm from "./ContactFrom";

const ContactPage = () => {
  return (
    <div className="relative mt-[7vw]">
      <div className="absolute top-64 left-[50%] -translate-x-[50%]">
        <ContactForm />
      </div>

      <div className=" bg-[#F9F9F7] bg-no-repeat bg-center bg-cover w-full h-[470px]">
        <h1 className="font-serif text-prh2 pt-5 font-medium text-center text-[78px]">
          Contact Us
        </h1>
        <p className="font-serif text-[#545E6A] mt-5 text-lg text-center w-[530px] mx-auto">
          We consider all the drivers of change gives you the components you
          need to change to create a truly happens.
        </p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6734275570775!2d-118.21990812556704!3d34.0522473177323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6129c6b0c45%3A0xe2d4bbb0819df265!2sBridge%20St%2C%20Los%20Angeles%2C%20CA%2090033%2C%20USA!5e0!3m2!1sen!2sbd!4v1729500235952!5m2!1sen!2sbd"
        className="w-full h-[530px]"
      ></iframe>
      <div className="flex justify-center gap-12 py-16">
        <div className="flex flex-col gap-2">
          <p className="font-serif font-bold text-lg">Call us:</p>
          <p className="font-sans font-bold text-btn text-2xl">
            +1-234-567-8900
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-serif font-bold text-[20px]">Hours:</p>
          <p className="font-sans text-lg">Mon-Fri: 11am - 8pm Sat,</p>
          <span className="font-sans text-lg">Sun: 9am - 10pm.</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-serif font-bold text-[20px]">Our location:</p>
          <p className="w-[210px] font-sans text-lg">
            123 Bridge Street, Nowhere Land, LA 12345 United States
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
