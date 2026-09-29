"use client";
import { Variants, motion } from "framer-motion";

// Each child: fades in and slides up slightly
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactForm = () => {
  return (
    <motion.form
      variants={itemVariants}
      className="flex-start-col gap-5 rounded-sm shadow-box bg-card-style p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2 w-full">
        <div className="flex-start-col gap-2">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-[1.5] text-body"
          >
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={inputStyle}
          />
        </div>
        <div className="flex-start-col gap-2">
          <label
            htmlFor="phone"
            className="text-xs uppercase tracking-[1.5] text-body"
          >
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className={inputStyle} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 w-full">
        <div className="flex-start-col gap-2 w-full">
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-[1.5] text-body"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputStyle}
          />
        </div>

        <div className="flex-start-col gap-2 w-full">
          <label
            htmlFor="subject"
            className="text-xs uppercase tracking-[1.5] text-body"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className={inputStyle}
          />
        </div>
      </div>

      <div className="flex-start-col gap-2 w-full grow">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-[1.5] text-body"
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`h-full ${inputStyle}`}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-accent px-6 py-4 text-sm font-medium uppercase tracking-[1.5] text-white shadow-button duration-300 hover:-translate-y-1"
      >
        Send Message
      </button>
    </motion.form>
  );
};

const inputStyle = `
w-full rounded-sm bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-accent resize-none text-sm
`;

export default ContactForm;
