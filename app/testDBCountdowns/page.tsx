export const dynamic = "force-dynamic";

import {prisma} from "@/lib/prisma";

export default async function Home() {
    const countdowns = await prisma.countdown.findMany();

    return (
        <div className="my-10 mx-10 text-white border w-fit p-4">
            <h1 className="mb-4 text-4xl">
                COUNTDOWNS OF DB
            </h1>
            <ol>
                {countdowns.map((countdown) => (
                    <li key={countdown.id} className="flex flex-col mb-2">
                        <span>{countdown.name}</span>
                        <span className="text-2xl">{countdown.eventDate.toString()}</span>
                    </li>
                ))}
            </ol>
        </div>
    )
}