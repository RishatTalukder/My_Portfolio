import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("left", "spring", 0.5 * index, 1)}
    className="bg-black-200 rounded-2xl p-10 xs:w-[320px] w-full"
  >
    <p className="text-white-100 text-[48px] font-semibold">"</p>

    <div className="mt-1">
      <p className="text-white-100 text-[16px] font-semibold">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white-100 text-[14x] font-medium">
            <span className="">
              @
              <span className="text-white-100 text-[14px] font-semibold">
                {name}, &nbsp;
              </span>
              <span className="blue-text-gradient text-[14px] font-semibold">
                {designation}
              </span>
            </span>
          </p>

          <p className="mt-1 text-secondary text-[12px] font-semibold">
            <span className="text-secondary text-[14px] font-semibold">
              {company}
            </span>
          </p>
        </div>

        <img
          src={image}
          alt={name}
          className="w-14 h-14 object-cover rounded-full"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[30px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-5 pb-14 flex flex-wrap justify-center gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "Feedbacks");
