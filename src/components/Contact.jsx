import React from "react";

import { useState, useRef } from "react";

import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";

import emailjs from "@emailjs/browser";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleCange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //template_pioqell
    //service_9n9vfcx
    //erLYUW93Az56g-fKB
    emailjs
      .send(
        "service_9n9vfcx",
        "template_pioqell",
        {
          from_name: form.name,
          to_name: "Rishat",
          from_email: form.email,
          to_email: "talukderrishat2@gmail.com",
          message: form.message,
        },
        "erLYUW93Az56g-fKB"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Your message has been sent successfully. I will contact you soon."
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong. Please try again later.");
          console.log(error);
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.5, 1)}
        className="flex-[0.75] bg-black-200 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          action=""
        >
          <label htmlFor="" className="flex flex-col gap-2">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleCange}
              placeholder="What's your name?"
              className="bg-black-100 rounded-2xl p-4 text-white-100 font-semibold outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            />
          </label>
          <label htmlFor="" className="flex flex-col gap-2">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleCange}
              placeholder="What's your email?"
              className="bg-black-100 rounded-2xl p-4 text-white-100 font-semibold outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            />
          </label>
          <label htmlFor="" className="flex flex-col gap-2">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              placeholder="What do you want to say?"
              id=""
              cols="30"
              onChange={handleCange}
              className="bg-black-100 rounded-2xl p-4 text-white-100 font-semibold outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none rounded-2xl w-fit text-white-100 font-semibold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.5, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
