"use client"

import { useEffect, useRef } from "react"

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const cards = skillsRef.current?.querySelectorAll<HTMLElement>(".skill-card")
    cards?.forEach((card) => {
      card.style.opacity = "0"
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills container">
      <h2>Skills & Expertise</h2>
      <div className="skills-grid" ref={skillsRef}>
        <div className="skill-card">
          <div className="skill-title">Programming Languages</div>
          <ul className="skill-list">
            <li>Kotlin</li>
            <li>C++</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skill-card">
          <div className="skill-title">Language</div>
          <ul className="skill-list">
            <li>English</li>
            <li>Vietnamese</li>
          </ul>
        </div>
        <div className="skill-card">
          <div className="skill-title">Activity</div>
          <ul className="skill-list" style={{ textAlign: "left" }}>
            <li>Media Committee, Social Work Team (2023 - Present)</li>
            <li>Green Summer Campaign 2023, VNUHCM-US</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
