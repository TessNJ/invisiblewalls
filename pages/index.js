import Head from "next/head";
import Image from "next/image";
import Anchor from "../components/Anchor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="splashSection">
          <article className="landingPage_introArticle">
            <div>
              <h1>Home</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla suscipit massa ac ullamcorper. Proin vitae condimentum lectus. Pellentesque sollicitudin, diam ac ultricies tincidunt, sapien nisi pulvinar lacus, ac
                auctor urna felis non dolor. Pellentesque consequat lobortis interdum. Curabitur vel consectetur metus. Nullam lobortis purus sit amet hendrerit ullamcorper. Praesent lacinia lectus magna, sit amet ultrices odio interdum eu.
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
            <Image className="imageAr1 iconHover" alt="" src={"https://picsum.photos/" + 300} width="300" height="300"></Image>
            <Image className="imageAr2 iconHover" alt="" src={"https://picsum.photos/" + 175} width="175" height="175"></Image>
            <Image className="imageAr3 iconHover" alt="" src={"https://picsum.photos/" + 100} width="100" height="100"></Image>
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
            <Image className="iconHover" alt="" src={"https://picsum.photos/" + 400} width="300" height="300"></Image>
            <Image className="iconHover" alt="" src={"https://picsum.photos/" + 400} width="300" height="300"></Image>
            <Image className="iconHover" alt="" src={"https://picsum.photos/" + 400} width="300" height="300"></Image>
            <Image className="iconHover" alt="" src={"https://picsum.photos/" + 400} width="300" height="300"></Image>
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
              <button className="buttonGallery">Hi</button>
              <button className="buttonGallery">Hi</button>
              <button className="buttonGallery">Hi</button>
              <button className="buttonGallery">Hi</button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
