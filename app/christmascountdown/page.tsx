"use client";

import { format } from "date-fns";
import { useEffect, useState } from "react";
import CountdownInfo from "../components/CountdownInfo";
import Countdown from "../components/Countdown";
import FullscreenBtn from "../components/FullscreenBtn";

export default function Home() {

    const [countdown, setCountdown] = useState<number[]>([]);

    useEffect(() => {
        const updateCountdown = () => {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();

            // Define o Natal do ano atual
            const targetDate = new Date(`${currentYear}-12-25T00:00:00`);

            // Se o Natal já passou, define o Natal do próximo ano
            if (currentDate > targetDate) {
                targetDate.setFullYear(currentYear + 1);
            }

            const difference = targetDate.getTime() - currentDate.getTime();

            const d = Math.floor(difference / (1000 * 60 * 60 * 24));
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((difference % (1000 * 60)) / 1000);

            setCountdown([d, h, m, s]);
        };

        // Atualiza a contagem a cada segundo
        const countdownInterval = setInterval(updateCountdown, 1000);

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