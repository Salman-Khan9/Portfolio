export default function Expertise() {
  const expertise = [
    { name: "Next.js", image: "../images/nextjs.png" },
    { name: "React.js", image: "../images/react.png" },
    { name: "Framer Motion", image: "../images/framer.png" },
    { name: "Javascript", image: "../images/javascript.png" },
    { name: "Tailwind-Css", image: "../images/tailwind.png" },
    { name: "Html", image: "../images/html.png" },
  ];
  return (
    <div className="container mx-auto pt-10 md:pt-32 flex flex-col items-center overflow-x-hidden">
      <div className="flex flex-col items-center mb-5 md:mb-10">
        <p className="text-[28px] md:text-[45px] font-semibold md:font-extrabold text-white">
          Expertise
        </p>
        <p className="text-[10px] md:text-[15px] md:font-medium bg-custom-gradient bg-clip-text text-transparent">
          Explore Now
        </p>
      </div>
      <div className="grid grid-cols-2 justify-center items-center text-white gap-8 md:gap-x-44 md:gap-y-10 mx-1">
        {expertise.map((items, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center  gap-2 md:gap-4 "
          >
            <div className="w-[80px] h-[70px] md:w-[226px] md:h-[120px] rounded-[4px] md:rounded-[8px] bg-white relative flex items-center justify-center">
              <img
                className="relative h-full p-2 w-full md:h-[100px] md:w-[156px] rounded-[4px] md:rounded-[8px] mix-blend-multiply   "
                src={items.image}
                alt="logo"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="font-semibold text-[10px] md:text-base md:font-extrabold  ">
                {items.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
