import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { Link } from "react-router-dom";
import image from "../firewatch.jpg";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  });

  return (
    <main>
      <img
        src={image}
        alt="Overlooking the forest"
        className="absolute bg-scroll"
      />
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid grid-cols-3 gap-16 p-12 pt-0">
          {projectData &&
            projectData.map((project, index) => (
              <article>
                <Link
                  to={"/project/" + project.link.current}
                  key={project.link.current}
                >
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={project.mainImage.asset.url}
                      alt={project.title}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-center items-end pr-4 pb-4">
                      <h1 className="text-center text-black-100 bg-opacity-90 bg-green-400 rounded-2xl text-4xl font-bold mb-2 hover:underline hover:text-grey-400 p-2">
                        <a
                          href={project.link}
                          alt={project.title}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.title}
                        </a>
                      </h1>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}

// <article className="bg-green-900 bg-opacity-80 relative rounded-lg shadow-xl bg-white p-10">
//
// <h1 className="text-center text-white text-4xl font-bold mb-2 hover:underline hover:text-green-400 pb-6">
//   <a
//     href={project.link}
//     alt={project.title}
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     {project.title}
//   </a>
// </h1>
//   <div className=" text-center text-green-100 text-xs space-x-4">
//     <span>
//       <strong className="font-bold font"></strong>{" "}
//       {project.description}
//     </span>

//     <p className="my-6 text-lg text-gray-700 leading-relaxed">
//       {project.desription}
//     </p>
//     <a
//       href={project.link}
//       rel="noopener noreferrer"
//       target="_blank"
//       className="text-green-100 font-bold hover:underline hover:text-green-400 text-2xl"
//     >
//       View The Project!{" "}
//     </a>
//   </div>
// </article>
