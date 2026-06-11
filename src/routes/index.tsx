import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IntroSequence } from "@/components/IntroSequence";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhijit Pawase — AI Engineer & Full-Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Abhijit Pawase — AI/Data Science engineer, full-stack developer, Google Student Ambassador, hackathon winner and national skating champion.",
      },
      { property: "og:title", content: "Abhijit Pawase — Portfolio" },
      {
        property: "og:description",
        content:
          "AI architect & full-stack engineer. Project Drishti, Milan Tours, Project Sarthi.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [showIntro, setShowIntro] = useState(true);

  const handleDone = () => setShowIntro(false);
  const replay = () => setShowIntro(true);

  return (
    <>
      <Portfolio onReplayIntro={replay} />
      <AnimatePresence>
        {showIntro && <IntroSequence key="intro" onDone={handleDone} />}
      </AnimatePresence>
    </>
  );
}
