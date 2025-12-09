import { useState, useEffect } from "react";

const phrases = [
  "REST APIs",
  "collaborative projects",
  "SQL databases",
  "backend systems",
  "clean code",
];

export const TypewriterText = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentPhrase.length) {
            setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <div className="text-xl md:text-2xl text-foreground min-h-[80px] flex items-center justify-center">
      <span>
        Aspiring backend-developer, currently learning the ropes and building{" "}
        <span className="font-bold text-accent">
          {displayedText}
          <span className="animate-pulse">|</span>
        </span>
      </span>
    </div>
  );
};
