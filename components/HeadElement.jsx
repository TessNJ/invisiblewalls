import React from "react";
import Head from "next/head";

export default function HeadElement({ title, content }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="robots" content="noindex,nofollow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.webp" />
    </Head>
  );
}
