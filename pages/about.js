import React from "react";
import Head from "next/head";
import Employee from "../components/Employee";

export default function About({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Contact Information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="aboutIntro">
          <div>
            <h1>About</h1>
            <p>
              Awesome people who design, iterate and produce great interactive experiences focused on social interaction. As a team we can offer years of experience making games and a broad range of products within AR and VR - with fine-tuned skills
              spanning over visual effects, animation, programming and much more. We all share a dedication to the newest technology and always strive towards creating breath-taking products.
            </p>
          </div>
        </section>
        <section className="aboutHistory">
          <h2>Timeline of Invisible Walls</h2>
          <article>
            <h4>2015</h4>
            <div>
              <h3>Joined Investigate North</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
          </article>
          <article>
            <h4>2017</h4>
            <div>
              <h3>Aporia: Beyond the Veil</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
            <div>
              <h3>Name: Invisible Walls</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
          </article>
          <article>
            <h4>2018</h4>
            <div>
              <h3>Project: Cainwood</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
          </article>
          <article>
            <h4>2019</h4>
            <div>
              <h3>First Class Trouble alpha</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
          </article>
          <article>
            <h4>2020</h4>
            <div>
              <h3>Novafos VR / Snapchat / Mobile game</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
          </article>
          <article>
            <h4>2021</h4>
            <div>
              <h3>April: First Class Trouble EA</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
            <div>
              <h3>November: First Class Trouble Release</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
          </article>
          <article>
            <h4>2022</h4>
            <div>
              <h3>John Dillermand</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
          </article>
          <article>
            <h4>2023</h4>
            <div>
              <h3>Next title in progress</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!
              </p>
            </div>
          </article>
        </section>
        <section className="employeeGrid">
          {data.map((e) => (
            <Employee key={e.id} name={e.name} jobtitle={e.jobtitle} img={e.img}></Employee>
          ))}
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
