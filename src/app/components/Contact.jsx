'use client';

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../components/styles";
import SectionWrapper from "../components/SectionWrapper";
import { staggerContainer, fadeIn } from "./Motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setIsSubmitted(true);
          setTimeout(() => {
            setForm({ name: "", email: "", message: "" });
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center justify-center p-6 md:p-12 xl:p-16 relative w-full -mt-16 md:-mt-24 xl:-mt-32"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      {/* Centered Form Container */}
      <div className="w-full max-w-lg bg-black/40 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-2xl text-center">
        <p className={`${styles.sectionSubText} text-gray-300`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-white`}>Contact</h3>

        {isSubmitted ? (
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="mt-8 p-6 rounded-xl bg-gradient-to-br from-emerald-800/20 to-emerald-500/10"
          >
            <h4 className="text-white text-xl font-bold mb-2">Message Sent!</h4>
            <p className="text-gray-300">Thanks! I'll get back to you soon.</p>
            <motion.div
              className="mt-4 h-1 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "linear" }}
            />
          </motion.div>
        ) : (
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center gap-6"
            variants={fadeIn("up", "tween", 0.4, 1)}
          >
            {/* Name Field */}
            <label className="w-full flex flex-col gap-2 text-left">
              <span className="text-white font-semibold">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="bg-black/30 border border-gray-600 text-white px-5 py-3 rounded-xl placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:border-emerald-400 transition-all duration-300 backdrop-blur-md"
              />
            </label>

            {/* Email Field */}
            <label className="w-full flex flex-col gap-2 text-left">
              <span className="text-white font-semibold">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="bg-black/30 border border-gray-600 text-white px-5 py-3 rounded-xl placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:border-emerald-400 transition-all duration-300 backdrop-blur-md"
              />
            </label>

            {/* Message Field */}
            <label className="w-full flex flex-col gap-2 text-left">
              <span className="text-white font-semibold">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message..."
                required
                className="bg-black/30 border border-gray-600 text-white px-5 py-3 rounded-xl placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:border-emerald-400 transition-all duration-300 backdrop-blur-md"
              />
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-8 py-3 rounded-xl text-white font-semibold 
              bg-gradient-to-tr from-emerald-600 to-emerald-400 shadow-lg 
              hover:from-emerald-500 hover:to-emerald-300 hover:shadow-emerald-500/30
              active:scale-95 transition-all duration-300 
              ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
