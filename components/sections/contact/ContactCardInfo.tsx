import Link from "next/link";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { Variants , motion } from "framer-motion";

const PHONE_DISPLAY = "+20 101 1560 550";
const WHATSAPP_NUMBER = "201011560550";
const EMAIL = "ahmedebrihem935@gmail.com";

// Each child: fades in and slides up slightly
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const socialIcons = [
  {
    title: "Facebook",
    icon: (
      <FiFacebook className="relative z-10 transition-all duration-500 group-hover:text-white" />
    ),
    url: "https://www.facebook.com/POOMMECOM",
  },
  {
    title: "Instagram",
    icon: (
      <FiInstagram className="relative z-10 transition-all duration-500 group-hover:text-white" />
    ),
    url: "https://www.instagram.com/ahmed_ibrahim187/",
  },
  {
    title: "Linkedin",
    icon: (
      <FiLinkedin className="relative z-10 transition-all duration-500 group-hover:text-white" />
    ),
    url: "https://www.linkedin.com/in/ahmed-ibrahiem-1796b7328/",
  },
];

const ContactCardInfo = () => {
  return (
    <motion.div variants={itemVariants} className="max-w-full flex flex-wrap lg:flex-nowrap lg:flex-row-reverse 2xl:flex-row gap-10 bg-card-style shadow-box  rounded-sm p-5 sm:p-20 2xl:p-8">
      <div className="w-full sm:min-w-60 sm:w-[50%]! flex lg:justify-end">
        <div className="relative max-sm:max-h-100 lg:h-100! 2xl:h-80! lg:w-100 max-w-160! rounded-sm bg-card-style flex-center mx-auto ">
          <img
            src="/images/profileImage.png"
            alt="Ahmed Profile"
            className="h-full object-cover max-w-full max-h-full"
          />
        </div>
      </div>

      <div className="flex-start-col gap-5 w-[50%] grow">
        <div className="flex-start-col gap-1">
          <h3 className="text-2xl font-bold">Ahmed Ibhraiem</h3>
          <p className="text-body">Full-Stack Developer</p>
        </div>

        <p className="text-body leading-7 max-w-100 2xl:max-w-full 2xl:w-full">
          Open for freelance work and full-time opportunities. Reach out via
          email, WhatsApp, or the form.
        </p>

        <div className="flex-start-col gap-1">
          <p className="text-body">
            Phone: <span className="text-heading">{PHONE_DISPLAY}</span>
          </p>
          <p className="text-body">
            Email: <span className="text-heading">{EMAIL}</span>
          </p>
        </div>

        {/* WhatsApp quick contact */}
        <Link
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            "Hi Ahmed, I'd like to discuss a project.",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-center gap-2 2xl:w-full rounded-sm bg-[#25D366] px-5 py-3 text-sm font-medium uppercase tracking-[1.5] text-white shadow-button duration-300 hover:-translate-y-1"
        >
          <FaWhatsapp size={20} />
          Chat on WhatsApp
        </Link>

        <div className="flex-start-col gap-3">
          <h4 className="text-sm uppercase tracking-[1.5] text-body">
            Find with me
          </h4>
          <div className="flex-start gap-3">
            {socialIcons.map((item, index) => (
              <Link
                title={item.title}
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-12 h-12 shadow-box rounded-sm text-xl flex-center overflow-hidden group hover:-translate-y-1 duration-500"
              >
                <span className="absolute inset-0 bg-box-style transition-opacity duration-500 group-hover:opacity-0" />
                <span className="absolute inset-0 bg-red-hover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCardInfo;
