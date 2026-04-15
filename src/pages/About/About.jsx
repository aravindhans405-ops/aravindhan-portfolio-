import { useState } from "react";
import { motion } from "framer-motion";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="about" 
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >

      <motion.div className="title" variants={itemVariants}>
        <h2>About Me</h2>
      </motion.div>

      <motion.div className="content" variants={containerVariants}>

        <motion.div
          className="photo-card"
          onClick={() => setFlip(!flip)}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            <div className="photo-front">
              <img src="img3.png" alt="" />
            </div>

            <div className="photo-back">
              <img src="img4.png" alt="" />
            </div>

          </div>

        </motion.div>

        <motion.div className="text-about" variants={itemVariants}>
          <p>
            Hi, I'm Aravindhan, a passionate Frontend Developer and Computer Science student.
            I enjoy building modern, responsive, and interactive web interfaces that provide
            a great user experience. I focus on clean design, smooth animations, and writing
            efficient code using modern web technologies. I'm always learning new tools and
            improving my skills to create better digital products. My goal is to combine
            creativity with technology to build websites that are both beautiful and functional.
          </p>
        </motion.div>

      </motion.div>

      <Skills />

    </motion.div>
  );
}

export default About;