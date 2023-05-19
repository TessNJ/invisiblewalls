import React from "react";
import { contactdb } from "../modules/contactdb";

export default function ContactForm() {
  async function collectMessage(event) {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    if (event.target[0].value && event.target[1].value && event.target[2].value) {
      console.log("success");
      const response = await contactdb({
        name: "Jeff",
        email: "sdfsf@sdfs.sdf",
        messages: "sdfsdfsfsfdsf",
      });
      if (response && response.length) {
        console.log(response);
        event.target[0].value = "";
        event.target[1].value = "";
        event.target[2].value = "";
      }
    }
  }
  return (
    <article className="contactForm">
      <div>
        <h3>Employment / Opportunities</h3>
        <p>To discuss additional positions on the team, or if you have a collaboration you would like to discuss, please fill out the form below. We will reach out at the earliest convenience, and we can&apos;t wait to hear more!</p>
      </div>
      <form
        id="contactFormRef"
        onSubmit={(e) => {
          collectMessage(e);
        }}
      >
        <div>
          <label>
            Email
            <input placeholder="Your email..." typeof="email" required></input>
          </label>
          <label>
            Name
            <input placeholder="Your name..." typeof="text" required></input>
          </label>
        </div>
        <label id="textBox">
          Message
          <textarea placeholder="Your Message ..." required></textarea>
        </label>
        <button type="submit" className="buttonSplash iconHover">
          Send
        </button>
      </form>
    </article>
  );
}
