// https://www.better-auth.com/
export const BetterAuthPrimaryButton = () => {
  return (
    <div className="w-full bg-neutral-800 h-96 px-12 py-6 flex items-center justify-center">
      <button className="relative h-12 w-64 group">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            style={{
              top: `${index + 1}px`,
              left: `${index + 1}px`,
            }}
            className="absolute w-full h-full bg-white group-hover:inset-0! transition-all duration-100 ease-out pointer-events-none"
          ></span>
        ))}
        <span className="absolute inset-0 z-10 bg-white w-full h-full uppercase flex items-center justify-center">
          Get started
        </span>
      </button>
    </div>
  );
};
