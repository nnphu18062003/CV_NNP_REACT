"use client"

import { useEffect, useRef } from "react"

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

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

    const cards = projectsRef.current?.querySelectorAll(".project-card")
    cards?.forEach((card) => {
      card.style.opacity = "0"
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects container">
      <h2>Project</h2>
      <div className="projects-grid" ref={projectsRef}>
        <div className="project-card">
          <div className="project-header">
            <div className="project-title">Learn about Pikachu game using Java</div>
          </div>
          <div className="project-body">
            <p className="project-description">
              Course's Project: PROGRAMMING JAVA // 03 - 06/2024. My team size: 05. In the project, I participated in
              researching and editing the program using Java to add and modify sound, task buttons such as roll icon,
              pause game, and new game.
            </p>
            <div className="project-tags">
              <span className="tag">Java</span>
              <span className="tag">Team of 5</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-header">
            <div className="project-title">Super-resolution and image quality enhancement</div>
          </div>
          <div className="project-body">
            <p className="project-description">
              Course's Project: MACHINE LEARNING // 04 - 05/2024. My team size: 01. This is a personal project where I
              completed the entire project myself, including idea, implementation, and evaluation.
            </p>
            <div className="project-tags">
              <span className="tag">Machine Learning</span>
              <span className="tag">Computer Vision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
