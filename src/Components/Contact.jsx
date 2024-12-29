import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  const phoneNumber = "+923108777428"; // Replace with your WhatsApp phone number
  const message = "Hello!"; // Pre-filled message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="py-96 " ref={ref}>
      <div className="flex flex-col items-center pb-10 overflow-x-hidden">
        <p className="md:text-[45px] text-[28px] font-semibold md:font-extrabold text-white flex justify-center ">
          Contact Me
        </p>
        <p className="text-[10px] md:text-[15px] md:font-medium bg-custom-gradient bg-clip-text text-transparent">
          {" "}
          Let's Connect
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 md:gap-10">
        <a
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center"
          href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
        >
          <img
            className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] rounded-full object-contain"
            src="/images/linkedinlogo.png"
            alt="linkedin"
          />
        </a>
        <a
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center"
          href="https://www.upwork.com/freelancers/~016f495aff474b8c60?mp_source=share"
        >
          <img
            className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] rounded-full object-fill"
            src="/images/upwork.png"
            alt="upwork"
          />
        </a>{" "}
        <a
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center"
          href="https://github.com/Salman-Khan9"
        >
          <img
            className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] rounded-full object-fill"
            src="/images/git.png"
            alt="github"
          />
        </a>{" "}
        <a
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center"
          href="mailto:salmankhn.sk28@gmail.com"
        >
          <img
            className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] rounded-full object-fill"
            src="/images/gmail.png"
            alt="gmail"
          />
        </a>{" "}
        <a
          className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-white rounded-full flex items-center justify-center"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-[20px] w-[20px] md:h-[40px] md:w-[40px] rounded-full object-fill"
            src="images/watsapp.png"
            alt="watsapp"
          />
        </a>
      </div>
    </div>
  );
});

export default Contact;
