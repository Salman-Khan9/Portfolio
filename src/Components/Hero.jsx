export default function Hero({ onScroll }) {
  return (
    <div className="flex flex-col items-center md:gap-[21px] gap-[10px] md:pt-44 pt-20 overflow-x-hidden">
      <img
        className="md:w-[229px] md:h-[229px] w-[100px] h-[100px] object-cover relative rounded-full"
        src="/images/profile.jpeg"
        alt="profile"
      />
      <div className=" leading-tight flex flex-col items-center">
        <p className="md:text-[63px] text-[28px] font-medium  md:font-bold text-white leading-none">
          Salman Karim
        </p>
        <p className="text-[18px] md:text-[26px] md:font-medium bg-custom-gradient bg-clip-text w-max text-transparent">
          Frontend Developer
        </p>
      </div>
      <p className="text-white md:font-medium text-center md:text-start text-[12px] md:text-[16px]">
        Passionate Software Engineer with a focus on ReactJs development,
        <br />
        dedicated to crafting elegant and user-friendly Web applications.
      </p>
      <button
        onClick={onScroll}
        className="md:py-4 md:px-[50px] py-2 px-5 text-white md:rounded-[75px] rounded-[20px] font-medium border-2 border-[#9A9A9A] hover:bg-white hover:text-black  transition-all"
      >
        Contact Me
      </button>
    </div>
  );
}
