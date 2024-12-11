"use client";

import CountdownCard from "./components/CountdownCard";

export default function Home() {
  return (
    <section className="min-h-screen bg-slate-900 text-white px-40 py-20">
      <div className="flex flex-wrap gap-6">
        <CountdownCard name="Christmas Day" path="/christmascountdown" image={`christmas.webp`} gradient="linear-gradient(to bottom, rgba(90,18,0,0.6),rgba(66,47,6,0.6))" />
        <CountdownCard name="New Year" path="/newyearcountdown" image={`background.png`} gradient="linear-gradient(to bottom, rgba(23,37,84,0.6),rgba(66,32,6,0.6))" />
      </div>
    </section>
  )
}