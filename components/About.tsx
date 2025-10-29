"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)

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

    const stats = statsRef.current?.querySelectorAll<HTMLElement>(".stat")
    stats?.forEach((stat) => {
      stat.style.opacity = "0"
      observer.observe(stat)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="container">
      <div className="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p style={{ marginLeft: "2rem", marginRight: "2rem", textAlign: "justify" }}>
            Applying the knowledge learned into practical work, aiming to develop professional skills and accumulate
            practical experience. Desiring to work in a professional and dynamic environment to learn from colleagues
            and contribute to the company's development. Hoping to have the opportunity to intern at the company to
            improve myself, enhance teamwork skills and communication skills. Through that, I will be better prepared
            for my future career.
          </p>
          <div className="about-stats" ref={statsRef}>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number">30+</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Exp.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
