import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
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
      tags
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
        <section className="grid grid-cols-2 gap-16 p-12 pt-0">
          {projectData &&
            projectData.map((project, index) => (
              <article className="bg-green-900 bg-opacity-80 relative rounded-lg shadow-xl bg-white p-10">
                <h1 className="text-center text-green-100 text-4xl font-bold mb-2 hover:underline hover:text-green-400">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h1>
                <div className=" text-center text-green-100 text-xs space-x-4">
                  <span>
                    <strong className="font-bold font"></strong>{" "}
                    {project.description}
                  </span>

                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.desription}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-green-100 font-bold hover:underline hover:text-green-400 text-2xl"
                  >
                    View The Project!{" "}
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
