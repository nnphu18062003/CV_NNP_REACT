"use client"

import type React from "react"

import { useEffect, useState } from "react"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id") || ""
        }
      })

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href) {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <nav>
      <a href="#" className="logo">
        NNP
      </a>
      <ul>
        <li>
          <a
            href="#about"
            onClick={handleSmoothScroll}
            style={{ color: activeSection === "about" ? "var(--primary-blue)" : "var(--dark-text)" }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={handleSmoothScroll}
            style={{ color: activeSection === "skills" ? "var(--primary-blue)" : "var(--dark-text)" }}
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={handleSmoothScroll}
            style={{ color: activeSection === "projects" ? "var(--primary-blue)" : "var(--dark-text)" }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={handleSmoothScroll}
            style={{ color: activeSection === "contact" ? "var(--primary-blue)" : "var(--dark-text)" }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
