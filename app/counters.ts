export function calculateCountdown(targetDate: Date): number[] {
    const currentDate = new Date();

    // Update for next year, if the event has already passed
    if (currentDate > targetDate) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const difference = targetDate.getTime() - currentDate.getTime();

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    return [d, h, m, s];
}

export function getNextChristmas(): Date {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Define Christmas for the current year
    const targetDate = new Date(`${currentYear}-12-25T00:00:00`);

    // If Christmas passed, define for the next year
    if (currentDate > targetDate) targetDate.setFullYear(currentYear + 1);

    return targetDate;
}

export function getNewYear(): Date {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    // Define New Year for the current year
    const targetDate = new Date(`${currentYear+1}-01-01T00:00:00`);

    return targetDate;
}