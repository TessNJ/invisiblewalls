import Head from "next/head";
import Image from "next/image";

export default function Job({ data }) {
  const jobData = data[0];
  let showButton;
  console.log(jobData);
  let currentDate = new Date().toJSON().slice(0, 10);
  if (jobData.deadline > currentDate) {
    console.log("valid");

    showButton = <button className="applyButton">Apply Job</button>;
  } else {
    console.log("invalid");
    showButton = <p className="applyInvalid">Dealine has past</p>;
  }

  return (
    <>
      <Head>
        <title>{jobData.jobtitle}</title>
        <meta name="description" content="Job post" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="jobPost">
        <section className="jobIntro">
          <div>
            <h1>{jobData.jobtitle}</h1>
            <p>
              We are looking for a {jobData.jobtitle} to join our amazing team in the heart of Copenhagen. Last year we launched our social deduction game `First Class Trouble` on Steam and Playstation 4 & 5. During November it came on Playstation
              Plus and had over 1.5 million players. Now we are working on our next multiplayer title and we`re looking for a programmer that can build our main menu and take responsibility for character costumization and many other features using
              Unreal EOS.
            </p>
          </div>
        </section>
        <section className="jobDetails">
          <article className="jobInfo">
            <h3>Main tasks</h3>
            <ul>
              {jobData.jobtasks.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
            <h3>Requirements</h3>
            <ul>
              {jobData.jobreq.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
            <h3>We Offer</h3>
            <ul>
              <li>A full-time position at our office in Copenhagen or working fully remote</li>
              <li>A solid pension scheme and health insurance on top of your salary</li>
              <li>Optional work from home</li>
              <li>Bonus program</li>
              <li>Paid parental leave</li>
              <li>Free vacation - minimum 25 days - take as much as you want</li>
              <li>Flexible working hours in mornings and afternoons</li>
              <li>Good colleagues and social activities</li>
              <li>A nice work environment in our beautiful office at Strøget in Copenhagen</li>
            </ul>
            <h3>Practical</h3>
            <p>Start as soon as possible. To apply, follow the link below. For further information check out company website: https://www.invisiblewalls.co/</p>
            <p>Deadline: {jobData.deadline}</p>
            <div className="applyButtonDiv">{showButton}</div>
          </article>
          <article className="imageArticle">
            <Image className="" alt="" src={"/" + jobData.imgname} width="600" height="700" />
          </article>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  console.log(slug);
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxramt6a3pxdGZod2Z5bmh3enh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNDkxMDAsImV4cCI6MTk5NzkyNTEwMH0.dJ3RCc9bmU3C0gFQq22hbDfXdzxUXETNiU8Yrknx4y8";
  const url = "https://lkjkzkzqtfhwfynhwzxx.supabase.co/";
  const res = await fetch(url + "rest/v1/iwjobs?id=eq." + slug + "&select=*", {
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

export const getStaticPaths = async () => {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxramt6a3pxdGZod2Z5bmh3enh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNDkxMDAsImV4cCI6MTk5NzkyNTEwMH0.dJ3RCc9bmU3C0gFQq22hbDfXdzxUXETNiU8Yrknx4y8";
  const url = "https://lkjkzkzqtfhwfynhwzxx.supabase.co/";
  const res = await fetch(url + "rest/v1//iwjobs", {
    method: "GET",
    headers: {
      apikey: key,
      Authorization: "Bearer" + key,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
  });
  const data = await res.json();
  const paths = data.map((entry) => {
    return { params: { slug: entry.id.toString() } };
  });
  return { paths, fallback: false };
};
