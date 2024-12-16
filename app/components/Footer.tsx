import { format } from "date-fns";

export default function Footer() {
    const year = new Date();
    return (
        <footer className="text-center p-4 bg-slate-800 border-t border-slate-700 text-white">
            &copy; All Rights Reserved to Mário Ponte - {format(year, "yyyy")}
        </footer>
    )
}