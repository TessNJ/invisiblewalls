import Head from "next/head";
import Image from "next/image";
import Anchor from "../components/Anchor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Landing Page" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
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
          <article className="landingPage_imageArticle">
            <div>
              <Image className="imageAr1" alt="" src={"/FirstClassIMG2.jpg"} width="300" height="300"></Image>
              <Image className="imageAr2" alt="" src={"/AporiaIMG.jpg"} width="175" height="175"></Image>
              <Image className="imageAr3" alt="" src={"/FirstClassIMG.jpg"} width="100" height="100"></Image>
            </div>
          </article>
        </section>
        <section className="linksSection">
          <ul>
            <li>
              <Anchor href="http://discord.gg/npeDKJh" target>
                <Image alt="" src="/discord-mark-white.webp" width="50" height="50" />
              </Anchor>
            </li>
            <li>
              <Anchor href="https://www.facebook.com/invisiblewallsstudio" target>
                <Image alt="" src="/fbicon.png" width="50" height="50" />
              </Anchor>
            </li>
            <li>
              <Anchor href="https://www.youtube.com/channel/UCAqeOUBMp_aX3tVZm1i_njQ" target>
                <Image alt="" src="/youtubeicon.png" width="50" height="50" />
              </Anchor>
            </li>
            <li>
              <Anchor href="https://twitter.com/invisible0walls" target>
                <Image alt="" src="/twitterlogo.webp" width="50" height="50" />
              </Anchor>
            </li>
            <li>
              <Anchor href="https://www.instagram.com/invisible_walls/" target>
                <Image alt="" src="/instaicon.png" width="50" height="50" />
              </Anchor>
            </li>
          </ul>
        </section>
        <section className="gallerySection">
          <article className="galleryArticle">
            <Anchor href="/games" className="imgContainer">
              <Image className="imgHover" alt="" src={"/caspar-camille-rubin-oI6zrBj3nKw-unsplash.jpg"} width="800" height="800"></Image>
            </Anchor>
            <Anchor href="/about" className="imgContainer">
              <Image className="imgHover" alt="" src={"/aboutbg.jpg"} width="800" height="800"></Image>
            </Anchor>
            <Anchor href="/career" className="imgContainer">
              <Image className="imgHover" alt="" src={"/andrew-neel-cckf4TsHAuw-unsplash.jpg"} width="800" height="800"></Image>
            </Anchor>
            <Anchor href="/contact" className="imgContainer">
              <Image className="imgHover" alt="" src={"/luca-bravo-9l_326FISzk-unsplash.jpg"} width="800" height="800"></Image>
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
              <Anchor href="/career" className="buttonGallery">
                Join Us!
              </Anchor>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
