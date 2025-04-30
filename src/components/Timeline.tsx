import { useState, useRef } from "react";

export default function Timeline() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const timelineEvents = [
    {
      year: "2025",
      title: "Current Position",
      description: "Senior Developer at Tech Co.",
    },
    {
      year: "2023",
      title: "Project Launch",
      description: "Led major client project implementation",
    },
    {
      year: "2022",
      title: "Promotion",
      description: "Advanced to team leadership role",
    },
    {
      year: "2021",
      title: "New Technology",
      description: "Implemented React-based architecture",
    },
    {
      year: "2020",
      title: "Career Change",
      description: "Moved into full-stack development",
    },
    {
      year: "2018",
      title: "Education",
      description: "Completed Masters in Computer Science",
    },
    {
      year: "2016",
      title: "First Role",
      description: "Junior Developer position",
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

    // Check if can scroll left (not at the beginning)
    setCanScrollLeft(container.scrollLeft > 0);

    // Check if can scroll right (not at the end)
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 5
    );
  };

  return (
    <div className="relative w-full bg-gray-100 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4 text-blue-700">
        Professional Timeline
      </h2>

      {/* Timeline container */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto flex gap-4 pb-4 px-2 scrollbar-hide"
        onScroll={checkScrollPosition}
      >
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow p-4 border-l-4 border-blue-700 hover:shadow-lg transition-all"
          >
            <div className="text-blue-700 font-bold text-lg">{event.year}</div>
            <h3 className="font-semibold text-gray-800 mt-1">{event.title}</h3>
            <p className="text-gray-600 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
