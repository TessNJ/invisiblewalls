import React from "react";
import Head from "next/head";
import Employee from "../components/Employee";
import HistoryDiv from "../components/HistoryDiv";

export default function About({ data }) {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About the company" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
            {/* <hr width="2" className="line" /> */}
            <article>
              <h4>2015</h4>
              <HistoryDiv name="Joined Investigate North">
                In 2015 a small group of developers joined the company `Investigate North`, who worked with content production and game development. Here they helped with the development on the companies current project as well as looking to start
                their own, known now as `Aporia: Beyond the Veil`
              </HistoryDiv>
            </article>
            <article>
              <h4>2017</h4>
              <HistoryDiv name="Aporia: Beyond the Veil">
                After years of defining and developing the project, the game was release to the public in 2017. This singleplayer game focuses is played as a visual experience, and is very linar. Prior to this, beta and alpha tesing was conducted
                through the years, before the full release of the game.
              </HistoryDiv>
              <HistoryDiv name="Name: Invisible Walls">
                Along with the game`s release, the team revealed the name of their newly formed independent company, Invisible Walls, as they are known today. This seperation for the company Investigate North, meant full control and focus on their
                next project.
              </HistoryDiv>
            </article>
            <article>
              <h4>2018</h4>
              <HistoryDiv name="Project: Cainwood">
                In 2018 a new project was tease, known then internally as `Project: Cainwood`, although not much was known at the time. It was however clear, that this would be a bigger game than their previous, as it was revealed to be a multiplayer
                survival game, rather than another singleplayer experience.
              </HistoryDiv>
            </article>
            <article>
              <h4>2019</h4>
              <HistoryDiv name="First Class Trouble alpha">
                In 2019 the game previously known as `Project Cainwood` re-titled to the now famous First Class trouble. Along with the new defining title, an aplha release for tesing was developed for users following the games journey.
              </HistoryDiv>
            </article>
            <article>
              <h4>2020</h4>
              <HistoryDiv name="Novafos VR / Snapchat / Mobile game">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </HistoryDiv>
            </article>
            <article>
              <h4>2021</h4>
              <HistoryDiv name="April: First Class Trouble EA">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </HistoryDiv>
              <HistoryDiv name="November: First Class Trouble Release">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </HistoryDiv>
            </article>
            <article>
              <h4>2022</h4>
              <HistoryDiv name="John Dillermand">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </HistoryDiv>
            </article>
            <article>
              <h4>2023</h4>
              <HistoryDiv name="Next title in progress">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
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
