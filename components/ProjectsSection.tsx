import React from "react";
import Image from "next/image";
import Link from "next/link";
import Appear from "./Appear";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

type Project = {
  name: string;
  description: string;
  image: string | null;
  tech?: string[];
  github: string;
  link: string;
};

const projects: Project[] = [
  {
    name: "Csphere",
    description:
      "Scalable bookmark application with cloud storage reducing media retrieval latency by 35%. Features GPT-powered auto-summaries, automated content categorization, and vector search via PostgreSQL embeddings processing 100+ bookmarks daily.",
    image: null,
    tech: ["Next.js", "FastAPI", "PostgreSQL", "AWS S3", "Docker"],
    github: "https://github.com/crosve/csphere",
    link: "",
  },
  {
    name: "Michi",
    description:
      "Autonomous Slack agent using smolagents and Gemini (VLM) for end-to-end meeting orchestration. Handles multi-step reasoning, automated conflict resolution, and integrates directly into the Slack workflow — actively used by my team.",
    image: null,
    tech: ["Slackbot", "smolagents", "Gemini", "Python"],
    github: "",
    link: "",
  },
  {
    name: "Mocha Mentors",
    description:
      "A web application that connects students with mentors in the tech industry. Built as my capstone project.",
    image: "/mocha.png",
    github: "https://github.com/wangtony4005/coffeechat",
    link: "",
  },
  {
    name: "Wander",
    description:
      "Cornell Red Hackathon project that allows users to upload and share travel experiences. Won best use of MongoDB.",
    image: "/wander.jpg",
    github: "https://github.com/crosve/wander",
    link: "",
  },
  {
    name: "LA'CUNY Compass",
    description:
      "All-in-one resource guide including an AI chat bot and a map that pinpoints CUNY resources based on each local college.",
    image: "/ctp-hackathon.png",
    github: "https://github.com/crosve/CTP-Hack",
    link: "https://ctp-hack.vercel.app/",
  },
  {
    name: "Pace Pulse",
    description:
      "A web application providing runners of all levels with custom training plans, injury prevention guidance, and race day shoe tracking.",
    image: "/pacepulse.png",
    github: "https://github.com/crosve/runnersspace",
    link: "https://runnersspace-git-main-crosves-projects.vercel.app/",
  },
  {
    name: "Samuel",
    description:
      "A website designed and built for a client to showcase his work, including a picture gallery.",
    image: "/samuel.png",
    github: "https://github.com/crosve/samuel",
    link: "https://samuellucero.vercel.app/",
  },
  {
    name: "Senudi",
    description:
      "Mental health platform aimed at giving people a sense of security and safety.",
    image: "/senudi.png",
    github: "",
    link: "https://www.senudi.org/",
  },
  {
    name: "Covid-19 Tracker",
    description:
      "An application to visually track Covid-19 case counts around the world.",
    image: "/covid.png",
    github: "https://github.com/crosve/COVID-19-Tracker",
    link: "https://covid19tracker-28bb1.web.app/",
  },
];

const StyledProjectCard = ({ project }: { project: Project }) => (
  <div
    className="w-full rounded-sm flex flex-col justify-between min-h-[200px] p-7"
    style={{
      backgroundColor: "rgba(44, 26, 14, 0.05)",
      border: "1px solid rgba(44, 26, 14, 0.12)",
    }}
  >
    <div>
      <p
        className="font-display text-xs tracking-[0.3em] uppercase mb-2"
        style={{ color: "#8B6344" }}
      >
        Project
      </p>
      <h3 className="font-display text-3xl font-bold text-sepia">{project.name}</h3>
    </div>
    {project.tech && (
      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="font-body text-xs font-medium px-2.5 py-1 rounded-sm text-sepia/80"
            style={{
              backgroundColor: "rgba(44, 26, 14, 0.08)",
              border: "1px solid rgba(44, 26, 14, 0.14)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    )}
  </div>
);

const ProjectsSection = () => {
  return (
    <div className="py-2 flex flex-col space-y-14">
        {projects.map((project, idx) => (
          <div key={idx}>
            <Appear>
              <div className="flex flex-col md:flex-row md:space-x-10">
                <div className="md:w-1/2">
                  {project.image === null ? (
                    <StyledProjectCard project={project} />
                  ) : project.link !== "" ? (
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-sm hover:opacity-80 transition-opacity"
                        style={{
                          boxShadow: "2px 4px 14px rgba(44, 26, 14, 0.15)",
                        }}
                      />
                    </Link>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="rounded-sm"
                      style={{
                        boxShadow: "2px 4px 14px rgba(44, 26, 14, 0.15)",
                      }}
                    />
                  )}
                </div>

                <div className="mt-6 md:mt-0 md:w-1/2">
                  <h3 className="font-display text-2xl font-bold text-sepia mb-3">
                    {project.name}
                  </h3>
                  <p className="font-body text-sepia/65 leading-relaxed mb-4 text-sm md:text-base">
                    {project.description}
                  </p>
                  {project.tech && project.image === null && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="font-body text-xs font-medium text-sepia/75 px-2.5 py-1 rounded-sm"
                          style={{
                            backgroundColor: "rgba(44, 26, 14, 0.05)",
                            border: "1px solid rgba(44, 26, 14, 0.12)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4 mt-2">
                    {project.github !== "" && (
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={24}
                          className="transition-transform hover:-translate-y-1 cursor-pointer text-sepia/60 hover:text-sepia"
                        />
                      </Link>
                    )}
                    {project.link !== "" && (
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={24}
                          className="transition-transform hover:-translate-y-1 cursor-pointer text-sepia/60 hover:text-sepia"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Appear>
          </div>
        ))}
      </div>
  );
};

export default ProjectsSection;
