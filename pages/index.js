import HeadElement from "../components/HeadElement";
import Image from "next/image";
import Anchor from "../components/Anchor";

export default function Home() {
  return (
    <>
      <HeadElement title="Home" content="Landing Page" />
      <main>
        <section className="splashSection">
          <article className="landingPage_introArticle">
            <div>
              <h1>Invisible Walls</h1>
              <p>
                We are the award winning studio behind First Class Trouble and Aporia: Beyond the Valley. Our focus is creating social strategy games, where social interaction is the core part of the experience. <br /> We value creativity,
                cooperation and developing game that are as fun to watch as they are to play. And we aim to incorporate these values into all our future games and other projects.
              </p>
            </div>
            <div>
              <p>This site aims to give you a look into who we are as a company, what we have developed over the years and possibilities of becoming part of the team.</p>
              <Anchor href="/about" className="buttonSplash iconHover">
                Read More
              </Anchor>
            </div>
          </article>
          <article className="landingPage_imageArticle" />
        </section>
        <section className="linksSection">
          <ul>
            <li>
              <Anchor href="http://discord.gg/npeDKJh" target>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-discord spin" viewBox="0 0 16 16">
                  <path d="M6.552 6.712c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" />
                  <path d="M13.36 0H2.64C1.736 0 1 .736 1 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072l-.424-1.48 1.024.952.968.896L15 16V1.648C15 .736 14.264 0 13.36 0zm-3.088 10.448s-.288-.344-.528-.648c1.048-.296 1.448-.952 1.448-.952-.328.216-.64.368-.92.472-.4.168-.784.28-1.16.344a5.604 5.604 0 0 1-2.072-.008 6.716 6.716 0 0 1-1.176-.344 4.688 4.688 0 0 1-.584-.272c-.024-.016-.048-.024-.072-.04-.016-.008-.024-.016-.032-.024-.144-.08-.224-.136-.224-.136s.384.64 1.4.944c-.24.304-.536.664-.536.664-1.768-.056-2.44-1.216-2.44-1.216 0-2.576 1.152-4.664 1.152-4.664 1.152-.864 2.248-.84 2.248-.84l.08.096c-1.44.416-2.104 1.048-2.104 1.048s.176-.096.472-.232c.856-.376 1.536-.48 1.816-.504.048-.008.088-.016.136-.016a6.521 6.521 0 0 1 4.024.752s-.632-.6-1.992-1.016l.112-.128s1.096-.024 2.248.84c0 0 1.152 2.088 1.152 4.664 0 0-.68 1.16-2.448 1.216z" />
                </svg>
              </Anchor>
            </li>
            <li>
              <Anchor href="https://www.facebook.com/invisiblewallsstudio" target>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-facebook spin" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </Anchor>
            </li>
            <li>
              <Anchor href="https://www.youtube.com/channel/UCAqeOUBMp_aX3tVZm1i_njQ" target>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-youtube spin" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                </svg>
              </Anchor>
            </li>
            <li>
              <Anchor href="https://twitter.com/invisible0walls" target>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-twitter spin" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </Anchor>
            </li>
            <li>
              <Anchor href="https://www.instagram.com/invisible_walls/" target>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-instagram spin" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </Anchor>
            </li>
          </ul>
        </section>
        <section className="gallerySection">
          <article className="galleryArticle">
            <Anchor href="/games" className="imgContainer">
              <Image className="imgHover" alt="" src={"/caspar-camille-rubin-oI6zrBj3nKw-unsplash.webp"} width="800" height="800"></Image>
            </Anchor>
            <Anchor href="/about" className="imgContainer">
              <Image className="imgHover" alt="" src={"/aboutbg.webp"} width="800" height="800"></Image>
            </Anchor>
            <Anchor href="/career" className="imgContainer">
              <Image className="imgHover" alt="" src={"/andrew-neel-cckf4TsHAuw-unsplash.webp"} width="800" height="800"></Image>
            </Anchor>
            <Anchor href="/contact" className="imgContainer">
              <Image className="imgHover" alt="" src={"/luca-bravo-9l_326FISzk-unsplash.webp"} width="800" height="800"></Image>
            </Anchor>
          </article>
          <article className="infoArticle">
            <div>
              <h2>Our website</h2>
              <p>
                Here you can find an overview of what this site contains. To read more about previous project you can head to the Games section. To read more about the history of the company and the team head to the About page. For available position
                head to the Career page or read more below. And for any inquiries you might have you can head to the Contact page, to find out how best to get in touch with us.
              </p>
            </div>
            <div className="infoLinks">
              <h3>Your future in game development</h3>
              <p>
                As we grow as a company, it is important to us that we keep the quality of our products consistent. We continuously keep a look out for enthusiastic individuals and post available positions here on our website. If you are looking for
                the next step in your future within game development, please reply to relevant open position, or contact us through the form by our contact information for unsolicited applications!
              </p>
              <Anchor href="/career" className="buttonSplash iconHover">
                Join Us!
              </Anchor>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
