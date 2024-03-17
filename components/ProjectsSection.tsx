import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./Appear";
import Appear from "./Appear";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Pace Pulse",
    description:
      "A web application that provides runners of all leves to create custom training, injury prevention plan, and track race day shoes. The application is currently in development.",
    image: "/pacepulse.png",
    github: "https://github.com/crosve/runnersspace",
    link: "https://runnersspace-git-main-crosves-projects.vercel.app/",
  },

  {
    name: "Samuel",
    description:
      "A website I designed and created for a client to showcase his work to potential employers. Includes a picture gallery to showcase his work.",
    image: "/samuel.png",
    github: "https://github.com/crosve/samuel",
    link: "https://samuellucero.vercel.app/",
  },
  {
    name: "Thrivr",
    description:
      "Mental Health Platform aimed to give people a sense of security and safety. Currently working on the application.",
    image: "/thrivr.png",
    github: "#",
    link: "https://thrivr.vercel.app/",
  },
  {
    name: "Covid-19 Tracker",
    description:
      "An application to visually see the number of cases of Coivd-19 around the world.",
    image: "/covid.png",
    github: "https://github.com/crosve/COVID-19-Tracker",
    link: "https://covid19tracker-28bb1.web.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <Appear>
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Appear>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
