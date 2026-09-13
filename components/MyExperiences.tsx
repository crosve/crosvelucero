"use client";
import { Reveal } from "./PageTransition";

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
    id: 1,
    role: "Software + AI Engineer Intern",
    company: "Blitz Corp",
    duration: "March 2026 – Present",
    description:
      "Built payout orchestration as a state machine across disbursement and reconciliation — failures, partial settlements, and retries resolve to the correct terminal state without manual intervention. Architected a provider-agnostic Redis leaky bucket throttling system. Designed an AI agent orchestration layer in PostgreSQL/Node.js managing 2,000+ creator partnerships. Migrated 5,000+ user records and 50GB of transactional data with 99.99% accuracy and zero downtime.",
    skills: ["Node.js", "PostgreSQL", "Redis", "TypeScript", "AI Agents", "LLMs"],
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Tip Top Technologies",
    duration: "April 2024 – September 2025",
    description:
      "Built a fault-tolerant data pipeline using Python, ActiveMQ, and microservices processing 1,000+ social media records daily — 40% faster via automated validation and cleaning. Developed type-safe React/TypeScript dashboards from Figma designs with real-time RESTful API integration. Deployed a centralized ELK observability system on Linux/Docker. Reduced release cycle time 30% with automated CI/CD pipelines.",
    skills: ["Python", "React", "TypeScript", "ActiveMQ", "Docker", "ELK", "CI/CD", "Flask"],
  },
  {
    id: 3,
    role: "Data Science Fellow",
    company: "CUNY Tech Prep",
    duration: "September 2024 – April 2025",
    description:
      "Led a team of three in building a CNN model to classify AI-generated images, achieving 97% accuracy. Presented at Demo Night, translating complex ML concepts into actionable insights for an audience of 100+ attendees.",
    skills: ["Python", "CNN", "Machine Learning", "Data Visualization"],
  },
];

function MyExperiences() {
  return (
    <div className="py-2 space-y-8">
        {experiences.map((exp) => (
          <Reveal key={exp.id}>
            <div
              className="pl-5 py-1 transition-all"
              style={{
                borderLeft: "2px solid rgba(139, 99, 68, 0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = "rgba(44, 26, 14, 0.7)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderLeftColor = "rgba(139, 99, 68, 0.35)";
              }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1 gap-1">
                <h3 className="font-display text-lg font-semibold text-sepia">
                  {exp.role}
                </h3>
                <span
                  className="font-display italic text-sm shrink-0"
                  style={{ color: "#6B5042" }}
                >
                  {exp.duration}
                </span>
              </div>

              <div className="font-display italic text-coffee text-base mb-3">
                {exp.company}
              </div>

              <p className="font-body text-sepia/70 leading-relaxed text-sm mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="font-body text-xs font-medium text-sepia/75 px-2.5 py-1 rounded-sm"
                    style={{
                      backgroundColor: "rgba(44, 26, 14, 0.06)",
                      border: "1px solid rgba(44, 26, 14, 0.12)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
  );
}

export default MyExperiences;
