import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import firewatch from "../firewatch.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="">
      <img
        src={firewatch}
        alt="Bio Background"
        className="bg-scroll absolute"
      />
      <div className="p-10 lg:pt-24 container mx-auto relative">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-green-100">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-green-100">
              <BlockContent
                blocks={author.bio}
                projectId="wnwfst0p"
                dataset="production"
              />
            </div>
            <a
              className="text-green-100 hover:underline hover:text-green-400 text-4xl"
              href="https://docs.google.com/document/d/1flWS1FVbQgfc2Iow_rDorOLggQte4MDC/edit?usp=sharing&ouid=113779951755772495475&rtpof=true&sd=true"
            >
              Check out my resume!
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
