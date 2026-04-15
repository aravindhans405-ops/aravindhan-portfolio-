import "./Header.css"
import { useState, useEffect } from "react"
import { Github, Instagram, Linkedin, Zap } from "lucide-react"

function Header() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={scrolled ? "header scroll" : "header"}>
            <div className="logo">
                <h1><Zap size={24} className="logo-icon" />Aravind</h1>
            </div>

            <ul className="links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#serv">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <ul className="icons">
                <li><a href="https://github.com/aravindhans405-ops" target="_blank"><Github size={22} /></a></li>
                <li><a href="https://instagram.com/orewa_aravindhan" target="_blank"><Instagram size={22} /></a></li>
                <li><a href="https://linkedin.com/in/aravindhan-sm" target="_blank"><Linkedin size={22} /></a></li>
            </ul>
        </header>
    )
}

export default Header