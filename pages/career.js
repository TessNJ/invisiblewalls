import React from "react";
import Head from "next/head";
import JobListItem from "../components/JobListItem";

export default function Career({ data }) {
  // console.log(data);
  return (
    <>
      <Head>
        <title>Career</title>
        <meta name="description" content="Job listings" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <section className="careerIntro">
          <div>
            <h1>Career</h1>
            <p>
              Awesome people who design, iterate and produce great interactive experiences focused on social interaction. As a team we can offer years of experience making games and a broad range of products within AR and VR - with fine-tuned skills
              spanning over visual effects, animation, programming and much more. We all share a dedication to the newest technology and always strive towards creating breath-taking products.
            </p>
          </div>
        </section>
        <section className="careerList">
          <article>
            <ul className="joblistul">
              {data.map((e) => (
                <JobListItem key={e.id} jobtitle={e.jobtitle} deadline={e.deadline} link={e.id} slug={e.id}></JobListItem>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxramt6a3pxdGZod2Z5bmh3enh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNDkxMDAsImV4cCI6MTk5NzkyNTEwMH0.dJ3RCc9bmU3C0gFQq22hbDfXdzxUXETNiU8Yrknx4y8";
  const url = "https://lkjkzkzqtfhwfynhwzxx.supabase.co/";
  const res = await fetch(url + "rest/v1/iwjobs", {
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
