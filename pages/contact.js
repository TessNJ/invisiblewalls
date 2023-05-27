import React from "react";
import ContactForm from "../components/ContactForm";
import HeadElement from "../components/HeadElement";

export default function Contact() {
  return (
    <>
      <HeadElement title="Contact" content="Contact Information" />
      <main>
        <section className="contactIntro">
          <div>
            <h1>Contact</h1>
            <p>
              We are a team dedicated to our users and to provide the best service we can. We have varying ways to reach us, depending on the reason for inquiring, and is labelled accordingly. We strive to respond within 4-5 business days for written
              and more complex inquires, and within working hours 8:00-17:00 Monday to Friday for call based inquires.
            </p>
          </div>
        </section>
        <section className="contactSection">
          <article className="contactInfo">
            <div>
              <h3>General Inquiries</h3>
              <p>
                We are always ready to help but can be preoccupied with current projects. For fast and easy questions please refer to our phone line, and for more complicated matters such as bugs or help needed, please refer to the listed email
                address.
              </p>
            </div>
            <div>
              <p className="infoDiv">
                Contact us at&nbsp; <a href="mailto: info@invisiblewalls.co ">info@invisiblewalls.co</a>&nbsp;or call at &nbsp;<a href="tel:+4500000000">+45 00 00 00 00</a>
              </p>
              <p>
                Frederiksberggade 28, 2.th,
                <br /> 1459 Copenhagen <br /> Denmark
              </p>
            </div>
          </article>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
