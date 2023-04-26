import React from "react";
import Head from "next/head";
import Game from "../components/Game";
import { gamesdb } from "../modules/gamesdb";

export default function Games({ data }) {
  // console.log(data);
  const loopTime = 4;
  return (
    <>
      <Head>
        <title>Games</title>
        <meta name="description" content="Contact Information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="gamesIntro">
          <div>
            <h1>Games</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!</p>
          </div>
        </section>
        <section className="gamesGrid">
          {data.map((e, i) => (
            <Game key={i} name={e.name} desc={e.desc} img={e.img} link={e.link} />
          ))}
        </section>
        <section></section>
      </main>
    </>
  );
}

export async function getStaticProps(contect) {
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
