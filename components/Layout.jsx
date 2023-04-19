import React from "react";
import Anchor from "./Anchor";

function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Anchor href={"/"}>Home</Anchor>
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
