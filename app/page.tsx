"use client";

import { useEffect, useState } from "react";
import CountdownCard from "./components/CountdownCard";
import MiniCountdown from "./components/MiniCountdown";
import { calculateCountdown, getNewYear, getNextChristmas } from "./counters";
import { Button } from "@/components/ui/button";
import { CalendarClock, MessageSquareWarning } from "lucide-react";

export default function Home() {

  const [countdownChristmas, setCountdownChristmas] = useState<number[]>([]);
  const [countdownNewYear, setCountdownNewYear] = useState<number[]>([]);

  useEffect(() => {
    const targetDateChristmas = getNextChristmas();
    const targetDateNewYear = getNewYear();

    const updateCountdown = () => {
      const countdownValuesChristmas = calculateCountdown(targetDateChristmas);
      const countdownValuesNewYear = calculateCountdown(targetDateNewYear);
      setCountdownChristmas(countdownValuesChristmas);
      setCountdownNewYear(countdownValuesNewYear);
    };

    // Atualiza a contagem a cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Inicializa o contador imediatamente
    updateCountdown();

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <section className="min-h-screen text-white px-4 py-10 max-w-screen-2xl m-auto">

      <div className="mb-10 px-6 py-4 flex justify-between bg-slate-800 border border-slate-700 rounded-lg">
        <div className="flex items-center gap-2">
          <MessageSquareWarning size={40} />
          <div className="flex flex-col">
            <span className="font-semibold">Atention</span>
            <span className="text-sm text-slate-200">This feature is still under construction, so it may contain problems or be temporarily unavailable.</span>
          </div>
        </div>
        <div>
          <Button variant={"secondary"} disabled className="font-semibold">
            <CalendarClock />
            <span>Create a Countdown</span>
          </Button>
        </div>
      </div>


      {/* TESTING COUNTDOWNS OF DB */}
      <div className="mb-10">
        <h1>
          COUNTDOWNS OF DB
        </h1>
        <ol>
          <li>Alice</li>
          <li>Bob</li>
        </ol>
      </div>



      <div className="flex flex-wrap gap-6">
        <CountdownCard name="Christmas Day" path="/christmascountdown" image={`christmas.webp`} gradient="linear-gradient(to bottom, rgba(90,18,0,0.6),rgba(66,47,6,0.6))">
          <div className="absolute bottom-2 text-center flex flex-col justify-center items-center">
            <MiniCountdown days={countdownChristmas[0]} hours={countdownChristmas[1]} minutes={countdownChristmas[2]} seconds={countdownChristmas[3]} message="Happy Christmas!" />
          </div>
        </CountdownCard>
        <CountdownCard name="New Year" path="/newyearcountdown" image={`background.png`} gradient="linear-gradient(to bottom, rgba(23,37,84,0.6),rgba(66,32,6,0.6))">
          <div className="absolute bottom-2 text-center flex flex-col justify-center items-center">
            <MiniCountdown days={countdownNewYear[0]} hours={countdownNewYear[1]} minutes={countdownNewYear[2]} seconds={countdownNewYear[3]} message="Happy New Year!" />
          </div>
        </CountdownCard>
      </div>
    </section>
  )
}