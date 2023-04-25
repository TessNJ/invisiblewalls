import React from "react";
import Image from "next/image";

export default function Game({ children }) {
  return (
    <article>
      <Image alt="" src={"https://picsum.photos/" + 1920 + "/" + 600} width="1000" height="600"></Image>
      <div>
        <h4> Game {children}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati modi nesciunt optio soluta voluptatum fuga quam repellendus temporibus impedit, sunt minima iste veritatis dolor ipsam voluptatibus id dicta suscipit!</p>
        <button className="buttonSplash ">Take me to site</button>
      </div>
    </article>
  );
}
