export default function About() {
  return (
    <div className="flex flex-col items-center pt-10 md:pt-32 md:gap-4 gap-2 container mx-auto overflow-x-hidden">
      <div className="flex flex-col items-center">
        <p className="md:text-[45px] text-[28px] md:font-extrabold font-semibold text-white leading-none">
          About Me
        </p>
        <p className="md:text-[15px] text-[10px] w-max md:font-medium bg-custom-gradient bg-clip-text text-transparent">
          Explore Now
        </p>
      </div>
      <p className="text-white text-[8px] md:text-[17px] md:font-medium container mx-auto">
        I am a dedicated and passionate Frontend Web Developer with expertise in
        React.js, Next.js, JavaScript, HTML, TailwindCss, and CSS. Over the past
        year, I have gained valuable professional experience by working with
        Eyewa, where I contributed to developing seamless and user-friendly web
        applications. Currently, I am working on the Naimat Project, continuing
        to refine my skills and deliver impactful solutions. Beyond my technical
        expertise, I bring a strong work ethic, creativity, and an eye for
        detail to every project. My commitment to crafting intuitive and
        responsive interfaces ensures that I consistently deliver exceptional
        user experiences.
      </p>
      <p className="text-white md:text-[17px] text-[8px] md:font-medium container mx-auto">
        {" "}
        When I am not coding, I enjoy indulging in my hobbies, including playing
        cricket, watching anime, and listening to music, which keep me inspired
        and energized. I look forward to connecting and collaborating on
        exciting projects that push the boundaries of innovation in web
        development.
      </p>
    </div>
  );
}
