import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import image from "../portfolio-background.jpg";
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
        src={image}
        alt="Bio Background"
        className="absolute object-cover w-full h-full"
      />
      <div className="px-20 pb-5 lg:pt-28 container mx-auto relative">
        <section className="bg-gradient-to-r from-green-100 to-green-50 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-48 h-48 lg:w-80 lg:h-80 mr-8 shadow-2xl"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center px-20 ">
            <h1 className="cursive text-6xl text-green-900 mb-2">
              Hey there. I'm{" "}
              <span className="text-green-700">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-green-900">
              <BlockContent
                blocks={author.bio}
                projectId="wnwfst0p"
                dataset="production"
              />
            </div>
            <a
              className="text-green-700 hover:underline hover:text-green-400 text-4xl"
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
