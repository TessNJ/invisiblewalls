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
          <Image alt="" src={"/logo.webp"} width={logoWidth} height={logoHeight} />
        </Anchor>
        <div className="burgerMenu" onClick={unfoldMenu}>
          <Image src={"/burger-menu.png"} height="35" width="35" alt="burgerMenu" />
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
            <Image alt="" src={"/logo.webp"} width="350" height="200" />
          </Anchor>
          <Anchor href={"https://www.amplifiergameinvest.com"}>
            <Image alt="" src={"/amplifierlogo.webp"} width="350" height="200" />
          </Anchor>
        </div>
        <div className="socialLinks">
          <Anchor href="http://discord.gg/npeDKJh" target>
            <Image alt="" src="/discord-mark-white.png" width="50" height="50" />
          </Anchor>
          <Anchor href="https://www.facebook.com/invisiblewallsstudio" target>
            <Image alt="" src="/fbicon.png" width="50" height="50" />
          </Anchor>
          <Anchor href="https://www.youtube.com/channel/UCAqeOUBMp_aX3tVZm1i_njQ" target>
            <Image alt="" src="/youtubeicon.png" width="50" height="50" />
          </Anchor>
          <Anchor href="https://twitter.com/invisible0walls" target>
            <Image alt="" src="/twitterlogo.png" width="50" height="50" />
          </Anchor>
          <Anchor href="https://www.instagram.com/invisible_walls/" target>
            <Image alt="" src="/instaicon.png" width="50" height="50" />
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
            <li>©2023 by Nerdifying.dk (collab: Invisible Walls)</li>
            <li>
              <Anchor href={"mailto: info@invisiblewalls.co"}>info@invisiblewalls.co</Anchor>
            </li>
            <li>
              <Anchor href={"/privacypolicy"} target>
                Privacy Policy
              </Anchor>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Layout;
