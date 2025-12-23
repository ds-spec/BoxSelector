"use client";
import { ChevronsUpDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BoxList from "./BoxList";

export default function BoxSelector() {
  const [isListActive, setIsListActive] = useState(false);
  const [value, setValue] = useState("");
  const [caretOffset, setCaretOffset] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleListActive = () => {
    setIsListActive((prev) => !prev);
  };

  useEffect(() => {
    if (spanRef.current) {
      setCaretOffset(spanRef.current.offsetWidth + 15);
    }
  }, [value]);

  return (
    <div className="relative flex justify-between items-center px-4 py-3.5 bg-neutral-100 text-neutral-800 w-3xs rounded-2xl shadow-sm">
      <span
        ref={spanRef}
        className="absolute opacity-0 pointer-events-none whitespace-pre font-sans font-medium tracking-tight text-xl"
      >
        {value}
      </span>
      <input
        onClick={handleListActive}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="relative bg-transparent border-none outline-none font-sans font-medium tracking-tight text-xl w-full caret-transparent"
        placeholder="Select a fruit..."
      />
      <span
        className="absolute w-[3px] h-7 bg-[#ff5400] rounded-[3px] pointer-events-none animate-pulse"
        style={{ left: `${caretOffset}px` }}
      ></span>
      {isListActive && <BoxList />}
      <ChevronsUpDown className="text-gray-500 font-bold w-5 h-5" />
    </div>
  );
}
