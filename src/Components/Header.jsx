export default function Header({ onScroll }) {
  return (
    <div className="flex items-center justify-between container mx-auto text-white sticky inset-0 z-10 bg-black overflow-x-hidden ">
      <div className="my-3 md:my-5">
        <p className="font-bold text-[12px] md:text-[22px]">
          {"</>"}SalmanK.dev
        </p>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={onScroll}
            className="py-1 px-3 md:py-2 md:px-4 border md:border-2 border-[#9A9A9A] text-[10px] md:text-[14px] md:font-medium rounded-[8px]  hover:bg-white hover:text-black  transition-all"
          >
            Contact Me
          </button>
          <a
            href="/assets/resume.pdf"
            download
            className="md:py-2 md:px-4 py-1 px-2 border md:text-[14px] text-[10px] md:font-medium text-black bg-white rounded-[8px]"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
