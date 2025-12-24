"use client";
import { ChevronsUpDown } from "lucide-react";
import { motion, Transition } from "motion/react";
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
      const paddingLeft = 15;
      setCaretOffset(spanRef.current.offsetWidth + paddingLeft);
    }
  }, [value]);

  const CARET_TRANSITION: Transition = {
    duration: 0.125,
    ease: "easeIn"
  }

  return (
    <div className="relative z-40">
      <div className="flex justify-between items-center px-4 py-3.5 bg-neutral-100 text-neutral-800 w-3xs rounded-2xl shadow-sm">
        <span
          ref={spanRef}
          className="absolute opacity-0 pointer-events-none whitespace-pre font-sans font-medium tracking-tight text-xl"
        >
          {value}
        </span>
        <input
          onClick={handleListActive}
          // onBlur={() => setIsListActive(false)}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="relative bg-transparent border-none outline-none font-sans font-medium tracking-tight text-xl w-full caret-transparent"
          placeholder="Select a fruit..."
        />
        <motion.span
          animate={{ left: `${caretOffset}px` }}
          transition={CARET_TRANSITION}
          className="absolute w-0.75 h-7 bg-[#ff5400] rounded-[3px] pointer-events-none animate-pulse"
        ></motion.span>
        {isListActive && <BoxList />}
        <ChevronsUpDown className="text-gray-500 font-bold w-5 h-5" />
      </div>
    </div>
  );
}
