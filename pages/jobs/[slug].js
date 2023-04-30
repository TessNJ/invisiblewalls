import { useRouter } from "next/router";
import Head from "next/head";

export default function Job({ data }) {
  const router = useRouter();
  const { slug } = router.query;
  console.log(data);
  return (
    <>
      <Head>
        <title>Career</title>
        <meta name="description" content="Contact Information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{slug}</h1>
      </main>
    </>
  );
}
// const Job = ({ data }) => {
//   const router = useRouter();
//   const { slug } = router.query;
//   console.log(data);
//   return (
//     <>
//       <Head>
//         <title>Career</title>
//         <meta name="description" content="Contact Information" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main>
//         <h1>{slug}</h1>
//       </main>
//     </>
//   );
// };

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxramt6a3pxdGZod2Z5bmh3enh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIzNDkxMDAsImV4cCI6MTk5NzkyNTEwMH0.dJ3RCc9bmU3C0gFQq22hbDfXdzxUXETNiU8Yrknx4y8";
  const url = "https://lkjkzkzqtfhwfynhwzxx.supabase.co/";
  const res = await fetch(url + "/iwjobs?id=eq." + slug + "&select=*", {
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
