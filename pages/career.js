import React from "react";
import Head from "next/head";
import JobListItem from "../components/JobListItem";

export default function Career({ data }) {
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
              We are a dedicated, hardworking team, who focus on great experiences and user experience. As we grow and develop, we periodically look for other enthusiastic people to join the team in delivering great products to our consumers. Here
              you can find currently available roles within the company, or to reach out regarding other positions, please refer to the contact form in the contact page.
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
