// counters.ts
export function calculateCountdown(targetDate: Date): number[] {
    const currentDate = new Date();

    // Atualiza para o próximo ano, se o evento já passou
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

    // Define o Natal do ano atual
    const targetDate = new Date(`${currentYear}-12-18T16:36:00`);

    // Se o Natal já passou, define o Natal do próximo ano
    if (currentDate > targetDate) targetDate.setFullYear(currentYear + 1);

    return targetDate;
}
