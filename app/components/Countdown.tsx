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
        <div className="flex mt-10">
            <div className={`${days === 0 && "hidden"} w-20 sm:w-28 md:w-48 lg:w-64`}>
                <div className="text-4xl sm:text-6xl md:text-6xl lg:text-9xl font-bold">
                    {days}
                </div>
                <div className="text-sm sm:text-xl md:text-2xl lg:text-4xl uppercase tracking-wide">
                    Days
                </div>
            </div>

            <div className={`${(days === 0 && hours === 0) && "hidden"} w-20 sm:w-28 md:w-48 lg:w-64`}>
                <div className="text-4xl sm:text-6xl md:text-6xl lg:text-9xl font-bold">
                    {hours}
                </div>
                <div className="text-sm sm:text-xl md:text-2xl lg:text-4xl uppercase tracking-wide">
                    Hours
                </div>
            </div>

            <div className={`${(days === 0 && hours === 0 && minutes === 0) && "hidden"} w-20 sm:w-28 md:w-48 lg:w-64`}>
                <div className="text-4xl sm:text-6xl md:text-6xl lg:text-9xl font-bold">
                    {minutes}
                </div>
                <div className="text-sm sm:text-xl md:text-2xl lg:text-4xl uppercase tracking-wide">
                    Minutes
                </div>
            </div>

            <div className={`${(days === 0 && hours === 0 && minutes === 0 && seconds === 0) && "hidden"} w-20 sm:w-28 md:w-48 lg:w-64`}>
                <div className="text-4xl sm:text-6xl md:text-6xl lg:text-9xl font-bold">
                    {seconds}
                </div>
                <div className="text-sm sm:text-xl md:text-2xl lg:text-4xl uppercase tracking-wide">
                    Seconds
                </div>
            </div>

            <div className={`${(days === 0 && hours === 0 && minutes === 0 && seconds === 0) ? "" : "hidden"} text-4xl sm:text-6xl md:text-6xl lg:text-9xl font-bold`}>
                {message}
            </div>
        </div>
    )
}

export default Countdown;