import { format } from "date-fns";

export default function Footer() {
    const year = new Date();
    return (
        <div className="text-center p-4 bg-gray-900 text-white">
            &copy; All Rights Reserved to Mário Ponte - {format(year, "yyyy")}
        </div>
    )
}