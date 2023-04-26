import React from "react";
import Image from "next/image";

export default function Game({ name, desc, img, link }) {
  console.log(img);
  let linkPresent;
  if (link) {
    linkPresent = <button className="buttonSplash ">Take me to site</button>;
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
