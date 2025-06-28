import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./Appear";
import Appear from "./Appear";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Mocha Mentors",
    description:
      "A web application that connects students with mentors in the tech industry. The application was for my capstone project",
    image: "/mocha.png",
    github: "https://github.com/wangtony4005/coffeechat",
    link: "",
  },
  {
    name: "Wander",
    description:
      "Cornell red hackathon project that allows users to upload their travel experiences and share with other users. Won best use of MongoDB.",
    image: "/wander.jpg",
    github: "https://github.com/crosve/wander",
    link: "",
  },
  {
    name: "LA'CUNY Compass",
    description:
      "All in one resource guide, inccluding a personal AI chat bot for personal discussion and map that pinpoints CUNY resource based off their local college",
    image: "/ctp-hackathon.png",
    github: "https://github.com/crosve/CTP-Hack",
    link: "https://ctp-hack.vercel.app/",
  },

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
    name: "Senudi",
    description:
      "Mental Health Platform aimed to give people a sense of security and safety.",
    image: "/senudi.png",
    github: "",
    link: "https://www.senudi.org/",
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
                    {project.link !== "" ? (
                      <Link href={project.link !== "" ? project.link : "/"}>
                        <Image
                          src={project.image}
                          alt=""
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github !== "" && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}

                      {project.link !== "" && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
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
