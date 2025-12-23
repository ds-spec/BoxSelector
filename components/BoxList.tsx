export default function BoxList() {
  const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  return (
    <div className="w-full absolute z-[-1] top-0 left-0 bg-[#ededed] pt-15 pb-2 rounded-3xl">
      <div className="flex flex-col gap-3">
        <ul>
          {fruits.map((fruit) => (
            <li
              key={fruit}
              className="text-neutral-500 font-sans font-medium tracking-tight text-xl px-4 py-2"
            >
              {fruit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
