"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import CountdownInfo from "../components/CountdownInfo";
import Countdown from "../components/Countdown";
import FullscreenBtn from "../components/FullscreenBtn";

export default function Page() {

  const [countdown, setCountdown] = useState([]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentDate = new Date();
      const targetDate = new Date(`01/01/${currentDate.getFullYear() + 1} 00:00:00`);
      const difference = targetDate.getTime() - currentDate.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      const countdownArray: any = [d, h, m, s];
      setCountdown(countdownArray);

      // Check if the year changes
      if (countdownArray.every((value: any) => value === 0)) {
        clearInterval(countdownInterval); // Stop interval
      }
    }, 1000);

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