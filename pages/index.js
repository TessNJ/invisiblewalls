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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <section className="splashSection">
          <article className="landingPage_introArticle">
            <div>
              <h1>Invisible Walls</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla suscipit massa ac ullamcorper. <br />
                Proin vitae condimentum lectus. Pellentesque sollicitudin, diam ac ultricies tincidunt, sapien nisi pulvinar lacus, ac auctor urna felis non dolor. Pellentesque consequat lobortis interdum.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla suscipit massa ac ullamcorper. Proin vitae condimentum lectus. Pellentesque sollicitudin, diam ac ultricies tincidunt, sapien nisi pulvinar lacus, ac
                auctor urna felis non dolor. Pellentesque consequat lobortis interdum.
              </p>
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
                <Image alt="" src="/discord-mark-white.png" width="50" height="50" />
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
                <Image alt="" src="/twitterlogo.png" width="50" height="50" />
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
              <h2>Our world</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla suscipit massa ac ullamcorper. Proin vitae condimentum lectus. Pellentesque sollicitudin, diam ac ultricies tincidunt, sapien nisi pulvinar lacus, ac
                auctor urna felis non dolor. Pellentesque consequat lobortis interdum. Curabitur vel consectetur metus. Nullam lobortis purus sit amet hendrerit ullamcorper. Praesent lacinia lectus magna, sit amet ultrices odio interdum eu.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla suscipit massa ac ullamcorper. Proin vitae condimentum lectus. Pellentesque sollicitudin, diam ac ultricies tincidunt, sapien nisi pulvinar lacus, ac
                auctor urna felis non dolor. Pellentesque consequat lobortis interdum. Curabitur vel consectetur metus. Nullam lobortis purus sit amet hendrerit ullamcorper. Praesent lacinia lectus magna, sit amet ultrices odio interdum eu.
              </p>
            </div>
            <div className="infoLinks">
              <h3>Your future in game development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla suscipit massa ac ullamcorper. Proin vitae condimentum lectus. Pellentesque sollicitudin, diam ac ultricies tincidunt, sapien nisi pulvinar lacus, ac
                auctor urna felis non dolor. Pellentesque consequat lobortis interdum. Curabitur vel consectetur metus. Nullam lobortis purus sit amet hendrerit ullamcorper. Praesent lacinia lectus magna, sit amet ultrices odio interdum eu.
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
