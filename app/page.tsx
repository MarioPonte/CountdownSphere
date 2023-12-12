import { addMonths, differenceInDays, differenceInMilliseconds, differenceInSeconds, intervalToDuration, isBefore, setDate, startOfToday } from "date-fns";

export default function Home() {

  // Function to calculate the time difference until the new year
  function calculateTime() {
    const currentDate = new Date();
    const nextYear = new Date(currentDate.getFullYear() + 1, 0, 1, 0, 0, 0);

    // Calculate diference in milisseconds
    const difference = differenceInMilliseconds(nextYear, currentDate);

    // Convert diference to an duration object
    const duration = intervalToDuration({ start: 0, end: difference });

    // Extract days, hours, minutes and seconds of the duration
    const { days, hours, minutes, seconds } = duration;

    // Retornar um array com os valores
    return [days, hours, minutes, seconds];
  }

  console.log(calculateTime());


  return (
    <section className="bg-black bg-[linear-gradient(to_bottom,rgba(23,37,84,0.6),rgba(66,32,6,0.6)),url('/images/background.png')] bg-cover bg-center">
      <div className='text-center text-white h-screen flex flex-col justify-center items-center'>
        <div className="text-4xl">
          Countdown for the arriving of
        </div>
        <div className="text-6xl font-bold">
          2024
        </div>

        <div className="flex mt-10">
          <div className="p-4 w-80">
            <div className="text-9xl font-bold">
              5
            </div>
            <div className="text-4xl uppercase tracking-wide">
              Days
            </div>
          </div>

          <div className="p-4 w-80">
            <div className="text-9xl font-bold">
              12
            </div>
            <div className="text-4xl uppercase tracking-wide">
              Hours
            </div>
          </div>

          <div className="p-4 w-80">
            <div className="text-9xl font-bold">
              25
            </div>
            <div className="text-4xl uppercase tracking-wide">
              Minutes
            </div>
          </div>

          <div className="p-4 w-80">
            <div className="text-9xl font-bold">
              32
            </div>
            <div className="text-4xl uppercase tracking-wide">
              Seconds
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
