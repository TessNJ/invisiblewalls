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
              <Anchor href={"/games"}>Games</Anchor>
            </li>
            <li>
              <Anchor href={"/about"}>About</Anchor>
            </li>
            <li>
              <Anchor href={"/career"}>Career</Anchor>
            </li>
            <li>
              <Anchor href={"/contact"}>Contact</Anchor>
            </li>
          </ul>
        </nav>
      </header>
      <>{children}</>
      <footer>
        <div>
          <h3>Hi</h3>
        </div>
        <nav>
          <ul>
            <li>
              <Anchor href={"/"}>Home</Anchor>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Layout;
