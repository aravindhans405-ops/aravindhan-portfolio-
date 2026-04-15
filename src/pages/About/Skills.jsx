import "./Skills.css";
import { motion } from "framer-motion";

function Skills(){

return(

<motion.div 
  className="skills"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6 }}
>
<div className="skills-slider">
<motion.div 
  className="skills-track"
  animate={{ x: [0, -1000] }}
  transition={{ 
    duration: 20, 
    repeat: Infinity, 
    ease: "linear" 
  }}
>

<span className="skill-icon">HTML5</span>
<span className="skill-icon">CSS3</span>
<span className="skill-icon">JavaScript</span>
<span className="skill-icon">React</span>

<span className="skill-icon">Java</span>
<span className="skill-icon">MySQL</span>
<span className="skill-icon">PHP</span>

<span className="skill-icon">Node.js</span>
<span className="skill-icon">Express</span>
<span className="skill-icon">MongoDB</span>

<span className="skill-icon">Git</span>
<span className="skill-icon">GitHub</span>
<span className="skill-icon">Figma</span>

<span className="skill-icon">Unity</span>
<span className="skill-icon">Tailwind</span>
<span className="skill-icon">Firebase</span>

</motion.div>

</div>

</motion.div>

)

}

export default Skills;