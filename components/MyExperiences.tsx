"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

type Experience = {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  skills: string[];
};

const experiences: Experience[] = [
  {
    id: 2,
    role: "Software Engineer",
    company: "TipTop Technologies",
    duration: "May 2025 - Current",
    description:
      "Working with NLP to anaylyze social media user consumtion data for our stake holders.",
    skills: [
      "React",
      "TypeScript",
      "Flask",
      "Tailwind CSS",
      "MySQL",
      "Docker",
      "FastAPI",
      "Gemini",
    ],
  },
  {
    id: 3,
    role: "Technical Lead",
    company: "Csphere - Rediscover your content",
    duration: "March 2025 - Current",
    description:
      "Taking lead on a passion project with a couple of guys. Setting up security and scalability of the platform. ",
    skills: ["Nextjs", "Tailwind", "JavaScript", "ShadCn"],
  },
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Tip Top Technologies",
    duration: "April 2024 - May 2025",
    description:
      "Worked on Social glass platform for ambascoo - an inside look into social media consumtion. ",
    skills: [
      "React",
      "TypeScript",
      "Flask",
      "Tailwind CSS",
      "MySQL",
      "Docker",
      "FastAPI",
    ],
  },
];

function MyExperiences() {
  // Sample experiences data
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [" Mon Expérience."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 flex items-center justify-center flex-col space-y-32">
      <h1>
        <span
          className="text-5xl font-bold text-gray-800 mb-8"
          ref={typedRef}
        ></span>
      </h1>

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="border-l-4 border-blue-500 pl-6 py-2 transition-all hover:border-blue-700"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {exp.role}
              </h3>
              <span className="text-gray-600 font-medium">{exp.duration}</span>
            </div>

            <div className="text-lg text-blue-600 mb-3">{exp.company}</div>

            <p className="text-gray-700 mb-4">{exp.description}</p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyExperiences;
