import React from "react";
import Anchor from "./Anchor";
import Image from "next/image";

function Layout({ children }) {
  let logoWidth = "250";
  let logoHeight = "100";

  function unfoldMenu(event) {
    document.querySelector(".burgerMenu").classList.toggle("active");
    document.querySelector(".navMenu").classList.toggle("hideMenu");
  }

  return (
    <>
      <header>
        <Anchor href={"/"} className={"logoLink"}>
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
              <Anchor toggle={true} href={"/"}>
                Home
              </Anchor>
            </li>
            <li>
              <Anchor toggle={true} href={"/games"}>
                Games
              </Anchor>
            </li>
            <li>
              <Anchor toggle={true} href={"/about"}>
                About
              </Anchor>
            </li>
            <li>
              <Anchor toggle={true} className="nav-link" href={"/career"}>
                Career
              </Anchor>
            </li>
            <li>
              <Anchor toggle={true} href={"/contact"}>
                Contact
              </Anchor>
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
          <Anchor href="http://discord.gg/npeDKJh">
            <Image alt="" src="/discordicon.webp" width="50" height="50" />
          </Anchor>
          <Anchor href="https://www.facebook.com/invisiblewallsstudio">
            <Image alt="" src="/fbicon.webp" width="50" height="50" />
          </Anchor>
          <Anchor href="https://www.youtube.com/channel/UCAqeOUBMp_aX3tVZm1i_njQ">
            <Image alt="" src="/youtubeicon.webp" width="50" height="50" />
          </Anchor>
          <Anchor href="https://twitter.com/invisible0walls">
            <Image alt="" src="/twittericon.webp" width="50" height="50" />
          </Anchor>
          <Anchor href="https://www.instagram.com/invisible_walls/">
            <Image alt="" src="/instaicon.webp" width="50" height="50" />
          </Anchor>
        </div>
        <div className="addressFooter">
          <p>
            Frederiksberggade 28, 2.th,
            <br /> 1459 Copenhagen <br /> Denmark
          </p>
        </div>
        <nav className="footerLinks">
          <ul>
            <li>
              <Anchor href={"/"}>Home</Anchor>
            </li>
            <li>
              <Anchor href={"mailto: info@invisiblewalls.co"}>info@invisiblewalls.co</Anchor>
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
