import React from "react";
import Head from "next/head";
import Game from "../components/Game";

export default function Games() {
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
          <h1>Games</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!</p>
        </section>
        <section className="gamesGrid">
          {[...Array(loopTime)].map((e, i) => (
            <Game key={i}>{i}</Game>
          ))}
        </section>
        <section></section>
      </main>
    </>
  );
}
