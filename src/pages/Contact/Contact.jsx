import NavBar from "../../components/NavBar/NavBar";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <NavBar />

      <section className="section__contact">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "350px",
            gap: "5px",
          }}
          action=""
        >
          <label htmlFor="">Your Name</label>
          <input className="input" type="text" />

          <label htmlFor="">Your Email</label>
          <input className="input" type="email" />

          <label htmlFor="">Your Message</label>
          <textarea
            className="message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </section>
    </>
  );
};

export default Contact;
