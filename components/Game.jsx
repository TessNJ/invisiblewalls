import React from "react";
import Image from "next/image";
import Anchor from "./Anchor";

export default function Game({ name, desc, img, link }) {
  // console.log(img);
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
      <Image alt="" src={img} width="1920" height="700"></Image>
      <div>
        <h4> {name}</h4>
        <p>{desc}</p>
        {linkPresent}
      </div>
    </article>
  );
}
