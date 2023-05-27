import React from "react";
import HeadElement from "../components/HeadElement";
import Employee from "../components/Employee";
import HistoryDiv from "../components/HistoryDiv";

export default function About({ data }) {
  return (
    <>
      <HeadElement title="About" content="About the company" />
      <main>
        <section className="aboutIntro">
          <div>
            <h1>About</h1>
            <p>
              We are a team of awsome people who design, iterate and produce great interactive experiences focused on social interaction. As a team we can offer years of experience making games and a broad range of products within AR and VR - with
              fine-tuned skills spanning over visual effects, animation, programming and much more. We all share a dedication to the newest technology and always strive towards creating breath-taking products.
            </p>
          </div>
        </section>
        <section className="aboutHistory">
          <h2>Timeline of Invisible Walls</h2>
          <div className="historyList">
            <article>
              <h4>2015</h4>
              <HistoryDiv name="Joined Investigate North">
                In 2015 a small group of developers joined the company `Investigate North`, who worked with content production and game development. Here they helped with the development on the company`s current project as well as looking to start
                their own, known now as `Aporia: Beyond the Veil`
              </HistoryDiv>
            </article>
            <article>
              <h4>2017</h4>
              <HistoryDiv name="Aporia: Beyond the Veil">
                After years of defining and developing the project, the game was release to the public in 2017. This single-player game focuses is played as a visual experience and is very linear. Prior to this, beta and alpha testing was conducted
                through the years before the full release of the game.
              </HistoryDiv>
              <HistoryDiv name="Name: Invisible Walls">
                Along with the game`s release, the team revealed the name of their newly formed independent company, Invisible Walls, as they are known today. This separation for the company Investigate North, meant full control and focus on their
                next project.
              </HistoryDiv>
            </article>
            <article>
              <h4>2018</h4>
              <HistoryDiv name="Project: Cainwood">
                In 2018 a new project was tease, known then internally as `Project: Cainwood`, although not much was known at the time. It was however clear, that this would be a bigger game than their previous, as it was revealed to be a multiplayer
                survival game, rather than another single-player experience.
              </HistoryDiv>
            </article>
            <article>
              <h4>2019</h4>
              <HistoryDiv name="First Class Trouble alpha">
                In 2019 the game previously known as `Project Cainwood`, was re-titled to the now famous First Class Trouble. Along with the new defining title, an aplha release for tesing was developed for users following the games journey.
              </HistoryDiv>
            </article>
            <article>
              <h4>2020</h4>
              <HistoryDiv name="Novafos VR / Snapchat / Mobile game">
                Alongside the development of their main project, the team collaborated with the water company Novafos in 2020. In this collaboration we developed a number of different types of content, the biggest being a VR experience.
              </HistoryDiv>
            </article>
            <article>
              <h4>2021</h4>
              <HistoryDiv name="April: First Class Trouble EA">
                After 2 years of development the game First Class trouble was available for Early Access in April of 2021. From this point, users were able to play and experience the periodic improvements made in the game, both in means of gameplay
                and content.
              </HistoryDiv>
              <HistoryDiv name="November: First Class Trouble Release">
                Later that same year in November 2021, the game had it`s full release. Through the 6 months of development, the game`s functionally became what we know today and would continue to grow over years in terms of content available.
              </HistoryDiv>
            </article>
            <article>
              <h4>2022</h4>
              <HistoryDiv name="John Dillermand">
                While continuing the work of previous games, the team collaborated with the Danish Broadcasting Corporation and the company MadeByUs. In this collaboration, we developed a mobile game for the beloved Danish children`s franchise, John
                Dillermand.
              </HistoryDiv>
            </article>
            <article>
              <h4>2023</h4>
              <HistoryDiv name="Next title in progress">
                With the success of their previous games, and the enthusiastic team, we at Invisible Walls will continue producing great quality content and strive to make our newest addition no different. We can`t wait to share it with you!
              </HistoryDiv>
            </article>
          </div>
        </section>
        <section className="employeeGrid">
          <h2>The Team</h2>
          <div>
            {data.map((e) => (
              <Employee key={e.id} name={e.name} jobtitle={e.jobtitle} img={e.img}></Employee>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(contect) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxramt6a3pxdGZod2Z5bmh3enh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNDkxMDAsImV4cCI6MTk5NzkyNTEwMH0.dJ3RCc9bmU3C0gFQq22hbDfXdzxUXETNiU8Yrknx4y8";
  const url = "https://lkjkzkzqtfhwfynhwzxx.supabase.co/";
  const res = await fetch(url + "rest/v1/iwemployees", {
    method: "GET",
    headers: {
      apikey: key,
      Authorization: "Bearer" + key,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
  });

  const data = await res.json();

  return { props: { data } };
}
