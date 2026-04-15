import "./Footer.css"
import { Github, Linkedin, Instagram } from "lucide-react";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Amine Hamzaoui</p>

        <div className="social-icons">

          <a href="#"><Github size={24} /></a>
          <a href="#"><Linkedin size={24} /></a>
          <a href="#"><Instagram size={24} /></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;