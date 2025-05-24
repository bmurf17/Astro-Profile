import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, MapPin, Briefcase } from "lucide-react";

export default function Timeline() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const timelineEvents = [
    {
      id: 1,
      company: "Origence",
      role: "Software Engineer",
      period: "Aug 2024 - Present",
      location: "Remote", // Add your actual location if available
      description:
        "Refactored and modernized an existing admin application by replacing deprecated Castle Library with modern technologies and migrated services to Azure.",
      skills: ["Angular", "C#", "Azure", "Azure Service Bus", "SAFe"],
      color: "bg-emerald-100 border-emerald-300",
      iconColor: "text-emerald-600",
    },
    {
      id: 2,
      company: "Vervint",
      role: "Software Development Consultant",
      period: "May 2022 - Aug 2024",
      location: "Hybrid-Grand Rapids, MI",
      description:
        "Spearheaded IoT device integration projects and developed modern cloud applications for multiple clients, including a vet tech company and manufacturing firm.",
      skills: [
        "Azure",
        "React",
        "C#",
        "Angular",
        "Terraform",
        "CosmosDB",
        "Azure Functions",
        "AI Services",
      ],
      color: "bg-blue-100 border-blue-300",
      iconColor: "text-blue-600",
    },
    {
      id: 3,
      company: "Auto-Owners Insurance",
      role: "Software Developer",
      period: "May 2021 - May 2022",
      location: "Hybrid-Grand Rapids, MI",
      description:
        "Automated document ingestion processes and developed desktop applications while establishing testing standards and best practices.",
      skills: [
        "C#",
        "WPF",
        "IBM Datacap",
        "Unit Testing",
        "Integration Testing",
      ],
      color: "bg-purple-100 border-purple-300",
      iconColor: "text-purple-600",
    },
    {
      id: 4,
      company: "Center For Leadership At Hope College",
      role: "Student Consultant Team Lead",
      period: "Aug 2020 - Apr 2021",
      location: "Holland, MI",
      description:
        "Led a team of student consultants to create solutions and developed automation tools including Teams Bot and BI Dashboard for IT operations.",
      skills: [
        "Leadership",
        "Power Automate",
        "Bot Framework",
        "Power BI",
        "Teams Development",
      ],
      color: "bg-amber-100 border-amber-300",
      iconColor: "text-amber-600",
    },
  ];

  const scroll = (direction: string) => {
    const container: any = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const targetScroll =
      container.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  const checkScrollPosition = () => {
    const container: any = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);

    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 5
    );
  };

  return (
    <div className="relative w-full bg-gray-100 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4 text-blue-700">
        Professional Timeline
      </h2>

      {/* Scroll buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          ←
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          →
        </button>
      )}

      {/* Timeline container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto flex gap-4 pb-4 px-2 scrollbar-hide"
        onScroll={checkScrollPosition}
      >
        {timelineEvents.map((experience, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 0.95,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.3 },
            }}
            className="flex-shrink-0 w-72 md:w-96 bg-white rounded-lg p-4 border-l-4 border-blue-700 shadow-md hover:cursor-pointer"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl">{experience.company}</h3>
                  <p className="font-medium text-gray-700">{experience.role}</p>
                </div>
                <div className="h-12 w-12 rounded-full bg-white shadow flex items-center justify-center">
                  <Briefcase className={`h-6 w-6 ${experience.iconColor}`} />
                </div>
              </div>

              <div className="flex items-center mb-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{experience.period}</span>
              </div>

              <div className="flex items-center mb-4 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{experience.location}</span>
              </div>

              <p className="text-gray-700 mb-4 break-words">
                {experience.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white rounded-full text-xs font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center text-sm font-medium hover:underline"
              >
                View details <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
