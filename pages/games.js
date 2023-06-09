import React from "react";
import HeadElement from "../components/HeadElement";
import Game from "../components/Game";
import { gamesdb } from "../modules/gamesdb";

export default function Games({ data }) {
  const loopTime = 4;
  return (
    <>
      <HeadElement title="Games" content="Game gallery" />
      <main>
        <section className="gamesIntro">
          <div>
            <h1>Games</h1>
            <p>
              At Invisible Walls we have developed a number of games, as well as other types of content in collaborations. Here you can see a list of published and credited work from our Studio. We hope to add many more in the future, and hope you
              enjoy the current games available!
            </p>
          </div>
        </section>
        <section className="gamesGrid">
          {data.map((e) => (
            <Game key={e.id} name={e.name} desc={e.desc} img={e.img} link={e.link} />
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxramt6a3pxdGZod2Z5bmh3enh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNDkxMDAsImV4cCI6MTk5NzkyNTEwMH0.dJ3RCc9bmU3C0gFQq22hbDfXdzxUXETNiU8Yrknx4y8";
  const url = "https://lkjkzkzqtfhwfynhwzxx.supabase.co/";
  const res = await fetch(url + "rest/v1/iwgames", {
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
