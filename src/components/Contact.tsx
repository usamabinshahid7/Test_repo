import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:usama.bin.shahid7@outlook.com"
                data-cursor="disable"
              >
                usama.bin.shahid7@outlook.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+923363226122" data-cursor="disable">
                +92 336 3226122
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://linkedin.com/in/usama-bin-shahid7"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://usamabinshahid.fyi"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Website <MdArrowOutward />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Usama Bin Shahid</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
