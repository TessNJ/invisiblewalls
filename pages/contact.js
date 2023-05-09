import React from "react";
import Head from "next/head";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Information" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="contactIntro">
          <div>
            <h1>Contact</h1>
            <p>
              Awesome people who design, iterate and produce great interactive experiences focused on social interaction. As a team we can offer years of experience making games and a broad range of products within AR and VR - with fine-tuned skills
              spanning over visual effects, animation, programming and much more. We all share a dedication to the newest technology and always strive towards creating breath-taking products.
            </p>
          </div>
        </section>
        <section className="contactSection">
          <article className="contactInfo">
            <di>
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </di>
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
          {/* <article className="contactForm">
            <div>
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
            <form>
              <div>
                <label>
                  Email
                  <input placeholder="Your email..." typeof="email"></input>
                </label>
                <label>
                  Name
                  <input placeholder="Your name..." typeof="text"></input>
                </label>
              </div>
              <label id="textBox">
                Message
                <textarea placeholder="Your Message ..."></textarea>
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Send
              </button>
            </form>
          </article> */}
          <ContactForm />
        </section>
      </main>
    </>
  );
}
