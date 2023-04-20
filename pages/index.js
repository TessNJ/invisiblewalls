import Head from "next/head";
import Image from "next/image";

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
                auctor urna felis non dolor. Pellentesque consequat lobortis interdum. Curabitur vel consectetur metus. Nullam lobortis purus sit amet hendrerit ullamcorper. Praesent lacinia lectus magna, sit amet ultrices odio interdum eu.
              </p>
            </div>
          </article>
          <article className="landingPage_imageArticle">
            <Image alt="" src={"https://picsum.photos/" + 400} width="400" height="400"></Image>
            <Image alt="" src={"https://picsum.photos/" + 200} width="200" height="200"></Image>
            <Image alt="" src={"https://picsum.photos/" + 100} width="100" height="100"></Image>
          </article>
        </section>
        <section className="linksSection">
          <ul>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </section>
        <section className="gallerySection">
          <article className="galleryArticle">
            <Image alt="" src={"https://picsum.photos/" + 400} width="300" height="300"></Image>
            <Image alt="" src={"https://picsum.photos/" + 400} width="300" height="300"></Image>
            <Image alt="" src={"https://picsum.photos/" + 400} width="300" height="300"></Image>
            <Image alt="" src={"https://picsum.photos/" + 400} width="300" height="300"></Image>
          </article>
          <article>
            <h1>Hi</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla suscipit massa ac ullamcorper. Proin vitae condimentum lectus. Pellentesque sollicitudin, diam ac ultricies tincidunt, sapien nisi pulvinar lacus, ac auctor
              urna felis non dolor. Pellentesque consequat lobortis interdum. Curabitur vel consectetur metus. Nullam lobortis purus sit amet hendrerit ullamcorper. Praesent lacinia lectus magna, sit amet ultrices odio interdum eu.
            </p>
            <h2>Hi</h2>
            <button>Hi</button>
            <button>Hi</button>
            <button>Hi</button>
            <button>Hi</button>
          </article>
        </section>
      </main>
    </>
  );
}
