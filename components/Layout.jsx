import React from "react";
import Anchor from "./Anchor";
import Image from "next/image";

function Layout({ children }) {
  let logoWidth = "250";
  let logoHeight = "100";

  function unfoldMenu(event) {
    event.target.classList.toggle("active");
    document.querySelector(".navMenu").classList.toggle("hideMenu");
  }

  return (
    <>
      <header>
        <Anchor href={"/"}>
          <Image alt="" src={"/logo.png"} width={logoWidth} height={logoHeight} />
        </Anchor>
        <div className="burgerMenu" onClick={unfoldMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1.5H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1.5H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1.5H3a.5.5 0 0 1-.5-.5z" />
          </svg>
        </div>
        <nav className="navMenu hideMenu">
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
        <div className="footerLogos">
          <Anchor href={"/"}>
            <Image alt="" src={"/logo.png"} width="350" height="200" />
          </Anchor>
          <Anchor href={"https://www.amplifiergameinvest.com"}>
            <Image alt="" src={"/amplifierlogo.png"} width="350" height="200" />
          </Anchor>
        </div>
        <div className="socialLinks">
          <Image className="iconHover" alt="" src={"https://picsum.photos/" + 50 + "/" + 50} width="50" height="50" />
          <Image className="iconHover" alt="" src={"https://picsum.photos/" + 50 + "/" + 50} width="50" height="50" />
          <Image className="iconHover" alt="" src={"https://picsum.photos/" + 50 + "/" + 50} width="50" height="50" />
          <Image className="iconHover" alt="" src={"https://picsum.photos/" + 50 + "/" + 50} width="50" height="50" />
          <Image className="iconHover" alt="" src={"https://picsum.photos/" + 50 + "/" + 50} width="50" height="50" />
        </div>
        <div className="addressFooter">
          <p>
            Lorem ipsum adipiscing elit. <br />
            Pellentesque fringilla suscipit massa. <br /> Proin vitae condimentum lectus.
          </p>
        </div>
        <nav className="footerLinks">
          <ul>
            <li>
              <Anchor href={"/"}>Home</Anchor>
            </li>
            <li>
              <Anchor href={"/"}>Home</Anchor>
            </li>
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
