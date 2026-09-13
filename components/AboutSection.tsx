import React from "react";
import { Reveal } from "./PageTransition";

const skills = [
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Go" },
  { skill: "C++" },
  { skill: "Java" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Express.js" },
  { skill: "Nest.js" },
  { skill: "Flask" },
  { skill: "FastAPI" },
  { skill: "ActiveMQ" },
  { skill: "Docker" },
  { skill: "Linux" },
  { skill: "Nginx" },
  { skill: "Apache Solr" },
  { skill: "PostgreSQL" },
  { skill: "MySQL" },
  { skill: "MongoDB" },
  { skill: "Redis" },
  { skill: "AWS" },
];

const AboutSection = () => {
  return (
    <div className="flex flex-col space-y-8 md:space-x-10 md:space-y-0 md:flex-row md:text-left py-2">
        <div className="md:w-1/2">
          <Reveal>
            <h3 className="font-display text-xl font-semibold text-sepia mb-5">
              Get to know me
            </h3>
            <div className="space-y-4 font-body text-sepia/75 leading-relaxed text-[0.95rem]">
              <p>
                Hi — I&#39;m Crosve, a{" "}
                <span className="font-semibold text-sepia">highly ambitious</span>,{" "}
                <span className="font-semibold text-sepia">self-motivated</span> software
                engineer based in New York City.
              </p>
              <p>
                I graduated from Hunter College in 2025 with a BA in Computer
                Science and a Minor in Mathematics, and I&#39;m currently pursuing
                my MS in Computer Science at NYU (Dec 2027). By day I&#39;m a
                Software + AI Engineer at{" "}
                <span className="font-semibold text-sepia">Blitz Corp</span>,
                building distributed systems and AI agent tooling.
              </p>
              <p>
                When I&#39;m not coding, you&#39;ll find me running through the
                streets of NYC or hunting for the best coffee shops the city has
                to offer — a future blog is definitely in the works.
              </p>
              <p className="italic">
                Growth is a privilege I never want to take for granted.{" "}
                <span className="not-italic font-semibold text-sepia">
                  One percent better, every day.
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="md:w-1/2">
          <Reveal>
            <h3 className="font-display text-xl font-semibold text-sepia mb-5">
              Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((item, idx) => (
                <span
                  key={idx}
                  className="font-body text-xs font-medium text-sepia/80 px-3 py-1.5 rounded-sm border"
                  style={{
                    borderColor: "rgba(44, 26, 14, 0.18)",
                    backgroundColor: "rgba(44, 26, 14, 0.04)",
                  }}
                >
                  {item.skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
  );
};

export default AboutSection;
