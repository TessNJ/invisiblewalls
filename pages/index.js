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
        <link rel="icon" href="/favicon.ico" />
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
              <button className="buttonSplash iconHover" onClick={(event) => event.preventDefault()}>
                Read More
              </button>
            </div>
          </article>
          <article className="landingPage_imageArticle">
            <div>
              <Image className="imageAr1" alt="" src={"https://picsum.photos/" + 300} width="300" height="300"></Image>
              <Image className="imageAr2" alt="" src={"https://picsum.photos/" + 175} width="175" height="175"></Image>
              <Image className="imageAr3" alt="" src={"https://picsum.photos/" + 100} width="100" height="100"></Image>
            </div>
          </article>
        </section>
        <section className="linksSection">
          <ul>
            <li>
              <Anchor href="#">Lorem Ipsum</Anchor>
            </li>
            <li>
              <Anchor href="#">Lorem Ipsum</Anchor>
            </li>
            <li>
              <Anchor href="#">Lorem Ipsum</Anchor>
            </li>
          </ul>
        </section>
        <section className="gallerySection">
          <article className="galleryArticle">
            <div>
              <Image className="imgHover" alt="" src={"https://picsum.photos/" + 600} width="600" height="600"></Image>
            </div>
            <div>
              <Image className="imgHover" alt="" src={"https://picsum.photos/" + 600} width="600" height="600"></Image>
            </div>
            <div>
              <Image className="imgHover" alt="" src={"https://picsum.photos/" + 600} width="600" height="600"></Image>
            </div>
            <div>
              <Image className="imgHover" alt="" src={"https://picsum.photos/" + 600} width="600" height="600"></Image>
            </div>
          </article>
          <article className="infoArticle">
            <div>
              <h2>Hi</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla suscipit massa ac ullamcorper. Proin vitae condimentum lectus. Pellentesque sollicitudin, diam ac ultricies tincidunt, sapien nisi pulvinar lacus, ac
                auctor urna felis non dolor. Pellentesque consequat lobortis interdum. Curabitur vel consectetur metus. Nullam lobortis purus sit amet hendrerit ullamcorper. Praesent lacinia lectus magna, sit amet ultrices odio interdum eu.
              </p>
            </div>
            <div className="infoLinks">
              <h3>Hi</h3>
              <button className="buttonGallery">Games</button>
              <button className="buttonGallery">About</button>
              <button className="buttonGallery">Career</button>
              <button className="buttonGallery">Contact</button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
