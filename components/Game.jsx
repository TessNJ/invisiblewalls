import React from "react";
import Image from "next/image";
import Anchor from "./Anchor";

export default function Game({ name, desc, img, link }) {
  let linkPresent;
  if (link) {
    linkPresent = (
      <Anchor href={link} target className="buttonSplash iconHover">
        See More
      </Anchor>
    );
  }
  return (
    <article>
      <Image alt="" src={img} width="537" height="460"></Image>
      <div>
        <h4> {name}</h4>
        <p>{desc}</p>
        {linkPresent}
      </div>
    </article>
  );
}
