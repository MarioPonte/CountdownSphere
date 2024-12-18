"use client";

import { useEffect, useState } from "react";
import CountdownInfo from "../components/CountdownInfo";
import Countdown from "../components/Countdown";
import FullscreenBtn from "../components/FullscreenBtn";
import { calculateCountdown, getNextChristmas } from "../counters";

export default function Page() {

    const [countdown, setCountdown] = useState<number[]>([]);

    useEffect(() => {
        const targetDate = getNextChristmas();

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

    return (
        <section id="countdownContainer" className="bg-black bg-[linear-gradient(to_bottom,rgba(90,18,0,0.6),rgba(66,47,6,0.6)),url('/images/christmas.webp')] bg-cover bg-center">
            <div className='text-center text-white h-screen flex flex-col justify-center items-center'>
                <CountdownInfo subtitle="Countdown for the" title="Christmas" />
                <Countdown days={countdown[0]} hours={countdown[1]} minutes={countdown[2]} seconds={countdown[3]} message="Happy Christmas!" />
                <FullscreenBtn />
            </div>
        </section>
    )
}