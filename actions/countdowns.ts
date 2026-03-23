import { prisma } from "@/lib/prisma";

export async function getCountdowns(){
    const data = await prisma.countdown.findMany({
        select: {
            id: true,
            slug: true,
            name: true,
            backgroundImg: true,
            eventDate: true,
            eventRepeat: true,
            eventType: true
        }
    });

    return data;
}