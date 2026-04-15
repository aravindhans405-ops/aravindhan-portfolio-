import "./Services.css"
import { motion } from "framer-motion";
import { Code, Palette, Monitor } from "lucide-react";

function Services(){

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return(
    <motion.div 
      className="services" 
      id="serv"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >

      <motion.div className="title" variants={cardVariants}>
        <h2>Services</h2>
      </motion.div>

      <motion.div className="services-container" variants={containerVariants}>

        <motion.div 
          className="service-card"
          variants={cardVariants}
          whileHover={{ y: -10, boxShadow: "0 15px 35px rgba(119,119,119,0.3)" }}
        >
          <Code className="service-icon"/>
          <h3>Frontend Development</h3>
          <p>I build modern and interactive websites using React, HTML, CSS, JavaScript, Node.Js, Php, MySql and Next.js.</p>
        </motion.div>

        <motion.div 
          className="service-card"
          variants={cardVariants}
          whileHover={{ y: -10, boxShadow: "0 15px 35px rgba(119,119,119,0.3)" }}
        >
          <Palette className="service-icon"/>
          <h3>UI Design</h3>
          <p>Creating clean and modern user interfaces with focus on design and usability.</p>
        </motion.div>

        <motion.div 
          className="service-card"
          variants={cardVariants}
          whileHover={{ y: -10, boxShadow: "0 15px 35px rgba(119,119,119,0.3)" }}
        >
          <Monitor className="service-icon"/>
          <h3>Web Applications</h3>
          <p>Building modern web applications with dynamic features and smooth performance.</p>
        </motion.div>

      </motion.div>

    </motion.div>
  )

}

export default Services;