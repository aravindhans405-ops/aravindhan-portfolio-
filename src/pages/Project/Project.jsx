import "./Project.css";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/Capture d'écran 2025-10-22 182207.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/Game Dashboard Design.jpg";
import img6 from "../../assets/images/Task manager app.jpg";

const projects = [
  {
    title: "E-Commerce Website",
    img: img1,
    desc: "Modern online store with product filtering, cart, and payment system.",
    skills: ["HTML", "CSS", "JavaScript"]
  },

  {
    title: "Portfolio Website",
    img: img2,
    desc: "Personal portfolio to showcase my design and coding projects.",
    skills: ["HTML", "CSS", "Bootstrap"]
  },

  {
    title: "Weather App",
    img: img3,
    desc: "Responsive app showing real-time weather data using API integration.",
    skills: ["HTML", "CSS", "API"]
  },

  {
    title: "Blog Website",
    img: img4,
    desc: "Clean and simple blogging platform with markdown support.",
    skills: ["HTML", "Tailwind", "JavaScript"]
  },

  {
    title: "Game Landing Page",
    img: img5,
    desc: "Landing page for a game with animations and parallax effects.",
    skills: ["HTML", "CSS", "GSAP"]
  },

  {
    title: "Task Manager",
    img: img6,
    desc: "Task tracking web app with CRUD features and clean UI.",
    skills: ["HTML", "CSS", "JS"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Project() {

  return (

    <motion.section 
      className="project reveal" 
      id="project"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >

      <motion.div className="title" variants={cardVariants}>
        <h2>Project</h2>
      </motion.div>

      <motion.div className="projects-container" variants={containerVariants}>

        {projects.map((project, index) => (

          <motion.div 
            className="project-card" 
            key={index}
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
          >

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a href="#" className="btn">
                <Github size={18} /> GitHub
              </a>

              <a href="#" className="btn">
                <ExternalLink size={18} /> Live Demo
              </a>

            </div>

          </motion.div>

        ))}

      </motion.div>

    </motion.section>

  );

}