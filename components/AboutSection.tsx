import React from "react";
import Image from "next/image";
import { Reveal } from "./PageTransition";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Firebase" },
  { skill: "Node.js" },
  { skill: "C++" },
  { skill: "SQL" },
  { skill: "Flask" },
  {skill: "FastAPi"},
  {skill: "Express.js"}
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <Reveal>
          <h1 className="text-center font-bold text-4xl">
            About Me
            <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
          </h1>
        </Reveal>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <Reveal>
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                Get to know me!
              </h1>

              <p>
                Hi, my name is Crosve and I am a{" "}
                <span className="font-bold">{"highly ambitious"}</span>,
                <span className="font-bold">{" self-motivated"}</span>, and
                <span className="font-bold">{" driven"}</span> software engineer
                student.
              </p>
              <br />
              <p>
                I graduate from Hunter College in 2025 and am excited to dive
                into the tech industry. During my time between classes, I&apos;m
                either completing school work or working on my own personal side
                projects.
              </p>
              <br />
              <p>
                When I&apos;m not coding, you can find me running through the
                streets of NYC. I love to explore new areas. One of my
                favorite&apos;s being Ridgewood Resevoir.
              </p>
              <br />
              <p>
                I believe that you should{" "}
                <span className="font-bold text-blue-500">
                  never stop growing
                </span>{" "}
                and that&apos;s what I strive to do. I have a passion for
                technology. Technology has improved the quality of life for many
                people and I want to be a part of that.
              </p>
            </Reveal>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <Reveal>
              <h1 className="text-2xl font-bold mb-6">My Skills</h1>

              <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                {skills.map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </Reveal>
            {/* <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
