// h-72 overflow-y-auto

export default function BoxList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Peach", "Pear", "Plum", "Kiwi", "Watermelon"];
  return (
    <div className="absolute z-[-1] -top-1 -left-1.25 bg-[#ededed] pt-16 pb-2 rounded-2xl" style={{ width: 'calc(100% + 9.5px)' }}>
      <div className="flex flex-col gap-3 px-1.5">
        <ul className="">
          {fruits.map((fruit) => (
            <li
              key={fruit}
              className="flex justify-between items-center text-neutral-500 hover:bg-[#e3e3e3] hover:text-black font-sans font-medium cursor-pointer tracking-tight text-xl px-3 py-2 rounded-xl"
            >
              {fruit}
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
