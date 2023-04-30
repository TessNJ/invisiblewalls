import React from "react";
import Anchor from "./Anchor";

export default function JobListItem({ jobtitle, deadline, link }) {
  return (
    <li>
      <h4>{jobtitle}</h4>
      <p>{deadline}</p>
      <Anchor href={"/jobs/" + link}>Read more</Anchor>
      {/* <Anchor href={{ pathname: "jobs/[slug]", query: { slug: link } }}>Read more</Anchor> */}
    </li>
  );
}
