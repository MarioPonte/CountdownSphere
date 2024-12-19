"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import CountdownInfo from "../components/CountdownInfo";
import Countdown from "../components/Countdown";
import FullscreenBtn from "../components/FullscreenBtn";
import { calculateCountdown, getNewYear } from "../counters";

export default function Page() {

  const [countdown, setCountdown] = useState<number[]>([]);
  
      useEffect(() => {
          const targetDate = getNewYear();
  
          const updateCountdown = () => {
              const countdownValues = calculateCountdown(targetDate);
              setCountdown(countdownValues);
          };
  
          // Atualiza a contagem a cada segundo
          const countdownInterval = setInterval(updateCountdown, 1000);
  
          // Inicializa o contador imediatamente
          updateCountdown();
  
          return () => clearInterval(countdownInterval);
      }, []);

  const year = new Date();

  return (
    <section id="countdownContainer" className="bg-black bg-[linear-gradient(to_bottom,rgba(23,37,84,0.6),rgba(66,32,6,0.6)),url('/images/background.png')] bg-cover bg-center">
      <div className='text-center text-white h-screen flex flex-col justify-center items-center'>
        <CountdownInfo subtitle="Countdown for the New Year" title={(parseInt(format(year,"yyyy")) + 1).toString()}/>
        <Countdown days={countdown[0]} hours={countdown[1]} minutes={countdown[2]} seconds={countdown[3]} message="Happy New Year!" />
        <FullscreenBtn/>
      </div>
    </section>
  )
}