import React from "react";
import Image from "next/image";

export default function Employee({ name, jobtitle, img }) {
  return (
    <article className="container">
      <Image src={img} width={219} height={219} alt="" className="employeeImg"></Image>
      <div className="overlay">
        <div className="text">
          <h5>{name}</h5>
          <p>{jobtitle}</p>
        </div>
      </div>
    </article>
  );
}
