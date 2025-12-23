import { ChevronsUpDown } from "lucide-react";

export default function BoxSelector() {
  return (
    <div className="flex justify-between items-center px-3 py-3 bg-neutral-100 text-neutral-800 rounded-2xl border border-gray-300 shadow-sm">
      <input
        className="bg-transparent border-none outline-none font-sans font-medium tracking-tight text-lg"
        placeholder="Select a fruit..."
      />
      <ChevronsUpDown size={"1.1em"} className="text-gray-500 font-bold" />
    </div>
  );
}
