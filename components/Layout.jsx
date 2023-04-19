import React from "react";
import Anchor from "./Anchor";
import Image from "next/image";

function Layout({ children }) {
  let logoWidth = "100";
  let logoHeight = "60";
  return (
    <>
      <header>
        <Image alt="" src={"https://picsum.photos/" + logoWidth + "/" + logoHeight} width={logoWidth} height={logoHeight} />
        <nav>
          <ul>
            <li>
              <Anchor href={"/"}>Home</Anchor>
            </li>
            <li>
              <Anchor href={"/contact"}>Contact</Anchor>
            </li>
          </ul>
        </nav>
      </header>
      <>{children}</>
      <footer></footer>
    </>
  );
}

export default Layout;
