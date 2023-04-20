import React from "react";
import Anchor from "./Anchor";
import Image from "next/image";

function Layout({ children }) {
  let logoWidth = "100";
  let logoHeight = "60";

  function unfoldMenu() {
    console.log("hi");
    document.querySelector(".navMenu").classList.toggle("hide");
  }

  return (
    <>
      <header>
        <Image alt="" src={"https://picsum.photos/" + logoWidth + "/" + logoHeight} width={logoWidth} height={logoHeight} />
        <div className="burgerMenu" onClick={unfoldMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <nav className="navMenu hide">
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
              <Anchor className="nav-link" href={"/career"}>
                Career
              </Anchor>
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
