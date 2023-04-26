import React from "react";
import Image from "next/image";

export default function Employee({ name, jobtitle, img }) {
  return (
    <article>
      <Image src={img} width={500} height={500} alt="" className="employeeImg"></Image>
      <h4>{name}</h4>
      <p>{jobtitle}</p>
    </article>
  );
}
