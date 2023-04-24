import React from "react";
import Image from "next/image";

export default function Game({ children }) {
  return (
    <article>
      <h4> Game {children}</h4>
      <Image alt="" src={"https://picsum.photos/" + 300} width="300" height="300"></Image>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!</p>
      <button>Take me to site</button>
    </article>
  );
}
