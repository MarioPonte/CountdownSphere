"use client";

import { differenceInMilliseconds, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
import CountdownInfo from "./components/CountdownInfo";

export default function Home() {

  const [countdown, setCountdown] = useState([]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentDate = new Date();
      const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1, 0, 0, 0);
      const difference = differenceInMilliseconds(nextYear, currentDate);
      const duration = intervalToDuration({ start: 0, end: difference });
      const { days, hours, minutes, seconds } = duration;

      const countdownArray: any = [days, hours, minutes, seconds];
      setCountdown(countdownArray);

      // Check if the year changes
      if (countdownArray.every((value: any) => value === 0)) {
        clearInterval(countdownInterval); // Stop interval
        console.log('Happy New Year!');
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <section className="bg-black bg-[linear-gradient(to_bottom,rgba(23,37,84,0.6),rgba(66,32,6,0.6)),url('/images/background.png')] bg-cover bg-center">
      <div className='text-center text-white h-screen flex flex-col justify-center items-center'>
        <CountdownInfo/>

        <div className="flex mt-10">
          <div className="p-4 w-80">
            <div className="text-9xl font-bold">
              {countdown[0]}
            </div>
            <div className="text-4xl uppercase tracking-wide">
              Days
            </div>
          </div>

          <div className="p-4 w-80">
            <div className="text-9xl font-bold">
              {countdown[1]}
            </div>
            <div className="text-4xl uppercase tracking-wide">
              Hours
            </div>
          </div>

          <div className="p-4 w-80">
            <div className="text-9xl font-bold">
              {countdown[2]}
            </div>
            <div className="text-4xl uppercase tracking-wide">
              Minutes
            </div>
          </div>

          <div className="p-4 w-80">
            <div className="text-9xl font-bold">
              {countdown[3]}
            </div>
            <div className="text-4xl uppercase tracking-wide">
              Seconds
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}