export default function Experience() {
  const skills = ["React.js", "Next.js", "Javascript", "Html", "TailwindCss"];
  return (
    <div className="flex flex-col items-center text-white md:pt-24 pt-10 overflow-x-hidden">
      <div className="flex flex-col items-center pb-5">
        <p className="md:text-[45px] text-[28px] font-semibold  md:font-extrabold text-white leading-none ">
          EXPERIENCE
        </p>
        <p className="md:text-[15px] text-[10px] md:font-medium bg-custom-gradient bg-clip-text text-transparent">
          Explore Now
        </p>
      </div>
      <div className="flex flex-col md:gap-14 gap-8">
        <div className="flex flex-col md:gap-3  gap-2">
          <div className="flex justify-between w-full container mx-auto">
            <p className="md:font-bold font-medium md:text-[18px] text-[10px]">
              Eyewa / Frontend Developer
            </p>
            <p className="text-[10px] md:text-base">
              Jan 2024 - Jan 2025 | Dubai, UAE
            </p>
          </div>
          <div>
            <p className="container mx-auto text-[8px] md:text-base">
              I contributed to Eyewa as a Frontend Web Developer. Eyewa is a
              leading e-commerce platform for eyewear in the Middle East. Eyewa
              offers a wide range of eyewear products, including prescription
              glasses, sunglasses, and contact lenses. I was involved in
              building and maintaining the web applications , ensuring smooth
              user experiences across both Desktop and Mobile web. My work
              focused on creating components, enhancing its responsiveness, and
              working on the functional and ui bugs to provide a seamless
              shopping experience for customers across the UAE and Saudi Arabia.
            </p>
          </div>
          <div className="flex gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-custom-gradient p-[0.5px] md:p-[1px] rounded-[15px] md:rounded-[20px]"
              >
                <button className="py-2 px-4 md:px-[15px] md:py-[5px] bg-black rounded-[15px] md:rounded-[20px] text-[8px] md:text-base">
                  {skill}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:gap-3 gap-2">
          <div className="flex justify-between w-full container mx-auto">
            <p className="md:font-bold  md:text-[18px] text-[10px] font-medium ">
              Naimaat / Frontend Developer
            </p>
            <p className="text-[10px] md:text-base">
              July 2024 - Present | Dubai, UAE
            </p>
          </div>
          <div>
            <p className="container mx-auto text-[8px] md:text-base">
              Currently, I am working on the Naimaat Project as a Frontend Web
              Developer. Naimaat, meaning "blessing" in Arabic, and the Naimaat
              team is on a mission to democratize investment in the MENA region.
              They want to empower individuals to invest confidently while
              providing startups with crowdfunding solutions to fuel their
              growth.
            </p>
          </div>
          <div className="flex md:gap-3 gap-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-custom-gradient p-[0.5px] md:p-[1px] rounded-[15px] md:rounded-[20px] "
              >
                <button className="py-2 px-4 md:px-[15px] md:py-[5px] bg-black rounded-[15px] md:rounded-[20px] text-[8px] md:text-base">
                  {skill}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
