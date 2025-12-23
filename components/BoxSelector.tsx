"use client";
import { ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import BoxList from "./BoxList";

export default function BoxSelector() {
  const [isListActive, setIsListActive] = useState(false);

  const handleListActive = () => {
    setIsListActive((prev) => !prev);
  };
  return (
    <div className="relative flex justify-between items-center px-4 py-3.5 bg-neutral-100 text-neutral-800 w-3xs rounded-2xl shadow-sm">
      <input
        onClick={handleListActive}
        type="text"
        className="bg-transparent border-none outline-none font-sans font-medium tracking-tight text-xl w-full"
        placeholder="Select a fruit..."
      />
      {isListActive && <BoxList />}
      <ChevronsUpDown className="text-gray-500 font-bold w-5 h-5" />
    </div>
  );
}
