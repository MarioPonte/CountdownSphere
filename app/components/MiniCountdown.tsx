"use client";

interface CountdownProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    message: string;
}

const Countdown: React.FC<CountdownProps> = ({ days, hours, minutes, seconds, message }) => {

    return (
        <div className="flex mt-10 select-none">
            <div className={`${days === 0 && "hidden"} w-16`}>
                <div className="text-2xl font-bold">
                    {days}
                </div>
                <div className="text-[10px] uppercase tracking-wide">
                    Days
                </div>
            </div>

            <div className={`${(days === 0 && hours === 0) && "hidden"} w-16`}>
                <div className="text-2xl font-bold">
                    {hours}
                </div>
                <div className="text-[10px] uppercase tracking-wide">
                    Hours
                </div>
            </div>

            <div className={`${(days === 0 && hours === 0 && minutes === 0) && "hidden"} w-16`}>
                <div className="text-2xl font-bold">
                    {minutes}
                </div>
                <div className="text-[10px] uppercase tracking-wide">
                    Minutes
                </div>
            </div>

            <div className={`${(days === 0 && hours === 0 && minutes === 0 && seconds === 0) && "hidden"} w-16`}>
                <div className="text-2xl font-bold">
                    {seconds}
                </div>
                <div className="text-[10px] uppercase tracking-wide">
                    Seconds
                </div>
            </div>

            <div className={`${(days === 0 && hours === 0 && minutes === 0 && seconds === 0) ? "" : "hidden"} text-xl font-bold`}>
                {message}
            </div>
        </div>
    )
}

export default Countdown;