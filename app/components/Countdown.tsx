"use client";

interface CountdownProps {
    days: any;
    hours: any;
    minutes: any;
    seconds: any;
}

const Countdown: React.FC<CountdownProps> = ({
    days,
    hours,
    minutes,
    seconds
}) => {

    return (
        <div className="flex mt-10">
            <div className="p-4 w-80">
                <div className="text-9xl font-bold">
                    {days}
                </div>
                <div className="text-4xl uppercase tracking-wide">
                    Days
                </div>
            </div>

            <div className="p-4 w-80">
                <div className="text-9xl font-bold">
                    {hours}
                </div>
                <div className="text-4xl uppercase tracking-wide">
                    Hours
                </div>
            </div>

            <div className="p-4 w-80">
                <div className="text-9xl font-bold">
                    {minutes}
                </div>
                <div className="text-4xl uppercase tracking-wide">
                    Minutes
                </div>
            </div>

            <div className="p-4 w-80">
                <div className="text-9xl font-bold">
                    {seconds}
                </div>
                <div className="text-4xl uppercase tracking-wide">
                    Seconds
                </div>
            </div>
        </div>
    )
}

export default Countdown;