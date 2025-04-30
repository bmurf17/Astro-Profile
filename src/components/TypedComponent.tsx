import { useState, useEffect } from "react";

export default function TypedTransition() {
  const titles = ["Software Developer", "Front End", "Backend", "IoT"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 125;
    const deleteSpeed = 75;
    const delayBetweenWords = 1000;

    let timeout: number | undefined;

    const currentTitle = titles[currentTitleIndex];

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  return (
    <h5 className="text-md text-blue-600 font-semibold">
      {displayText}
      <span className="animate-pulse">|</span>
    </h5>
  );
}
