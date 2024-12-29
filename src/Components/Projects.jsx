export default function Projects() {
  const Projects = [
    {
      name: "Eyewa",
      image: "../images/eyewaLogo.png",
      description:
        "Assisted the frontend team of eyewa in creating dynamic components for both desktop and mobile website of eyewa using Next.Js",
      link: "https://eyewa.com/ae-en",
    },
    {
      name: "Naimaat",
      image: "../images/naimaatLogo.png",
      description:
        "Developed and implemented a modern, responsive website with over 15 dynamic screens using Next.js, seamlessly integrating API data to enhance user interactivity and functionality.",
      link: "https://naimaat.com/",
    },
    {
      name: "InvHub ",
      image: "../images/invHub.png",
      description:
        "InvHub is a practice project. In this project, I utilized React.js for the frontend and Node.js with Express.js for the backend and redux ToolKit for state management.",
      link: "https://github.com/Salman-Khan9/inventory-invoice-web",
    },
    {
      name: "TourArc",
      image: "../images/TourArc.png",
      description:
        "TourArc is a practice project which i build with the help of React.Js, Redux ToolKit, TailwindCss, Node.js and Express.Js ",
      link: "https://github.com/Salman-Khan9/TourArc",
    },
  ];
  return (
    <div className="container mx-auto pt-10 md:pt-32 flex flex-col items-center overflow-x-hidden">
      <div className="flex flex-col items-center mb-5 md:mb-10">
        <p className="text-[28px] md:text-[45px] font-semibold md:font-extrabold text-white">
          Projects
        </p>
        <p className="text-[10px] md:text-[15px] md:font-medium bg-custom-gradient bg-clip-text text-transparent">
          Explore Now
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center text-white gap-y-5 md:gap-x-44 md:gap-y-10 mx-1">
        {Projects.map((items, index) => (
          <a
            href={items.link}
            key={index}
            className="flex items-center md:items-start gap-2 md:gap-4 "
          >
            <div className="w-[80px] h-[70px] md:w-[226px] md:h-[120px] rounded-[4px] md:rounded-[8px] bg-white relative flex items-center justify-center">
              <img
                className="relative h-[40px] w-[40px] md:h-[100px] md:w-[156px] rounded-[4px] md:rounded-[8px] mix-blend-multiply   "
                src={items.image}
                alt="logo"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="font-semibold text-[10px] md:text-base md:font-extrabold  ">
                {items.name}
              </p>
              <p className="md:font-medium text-[8px]  md:text-[12px] w-[300px]">
                {items.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
