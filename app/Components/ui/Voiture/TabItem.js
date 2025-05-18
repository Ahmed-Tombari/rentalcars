// components/TabItem.tsx
const TabItem = ({ title, isActive = false, onClick }) => {
  return (
    <div
      className="relative w-[305px] h-[68px] cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`absolute top-0 text-lg ${
          isActive ? "font-bold dark:text-[#c8ff00] text-[#c8ff00]" : "font-medium"
        }`}
        style={{ left: "37.05%" }}
      >
        {title}
      </div>
      <div
        className={`absolute bottom-0 left-0 w-full border-t ${
          isActive
            ? "border-4 border-[#c8ff00] dark:border-[#c8ff00]"
            : "border border-gray-400"
        }`}
      ></div>
    </div>
  );
};

export default TabItem;