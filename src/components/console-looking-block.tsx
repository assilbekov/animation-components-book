type ConsoleLookingBlockProps = {
  title: string;
  children: React.ReactNode;
};

export const ConsoleLookingBlock = ({
  title,
  children,
}: ConsoleLookingBlockProps) => {
  return (
    <div className="bg-[#1e1e1e] border w-120 border-neutral-800 rounded-lg p-6 shadow-2xl">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-neutral-500 ml-2 font-mono">{title}</span>
      </div>
      <div className="text-green-400">{children}</div>
    </div>
  );
};
