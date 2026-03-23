"use client";

import { useEffect, useState } from "react";
import CountdownCard from "./CountdownCard";
import MiniCountdown from "./MiniCountdown";
import { calculateCountdown, getCountdown } from "../counters";
import { Button } from "@/components/ui/button";
import { CalendarClock, MessageSquareWarning } from "lucide-react";

interface MainContentProps {
    data: any;
}

const MainContent: React.FC<MainContentProps> = ({ data }) => {

    const [countdown, setCountdownNewYear] = useState<number[]>([]);

    useEffect(() => {
        const targetDate = getCountdown(data[1].eventDate);

        const updateCountdown = () => {
            const countdownValues = calculateCountdown(targetDate);
            setCountdownNewYear(countdownValues);
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

            <div className="flex flex-wrap gap-6">
                <CountdownCard name={data[1].name} path="/newyearcountdown" image={`background.png`} gradient="linear-gradient(to bottom, rgba(23,37,84,0.6),rgba(66,32,6,0.6))">
                    <div className="absolute bottom-2 text-center flex flex-col justify-center items-center">
                        <MiniCountdown days={countdown[0]} hours={countdown[1]} minutes={countdown[2]} seconds={countdown[3]} />
                    </div>
                </CountdownCard>
            </div>
        </section>
    )
}

export default MainContent;