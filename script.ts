import { prisma } from "./lib/prisma";

async function main() {
    // Create a new user with a post
    const user = await prisma.countdown.create({
        data: {
            slug: "halloweenday",
            name: "Halloween Day",
            backgroundImg: "halloween.png",
            eventDate: new Date("2027-10-31T00:00:00Z"),
            eventRepeat: false,
            eventType: "celebration"
        }
    });
    console.log("Created user:", user);

    // Fetch all countdowns setted to not repeat
    const allCountdowns = await prisma.countdown.findMany({});
    console.log("All Countdowns:", JSON.stringify(allCountdowns, null, 2));
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });