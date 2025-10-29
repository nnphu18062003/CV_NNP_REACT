"use client"

import { useEffect, useRef } from "react"

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null)

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

    const items = contactRef.current?.querySelectorAll(".contact-item")
    items?.forEach((item) => {
      item.style.opacity = "0"
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="contact container">
      <h2>Let's Connect</h2>
      <p style={{ color: "var(--light-text)", marginBottom: "2rem" }}>
        I'm always interested in hearing about new projects and opportunities.
      </p>
      <div className="contact-info" ref={contactRef}>
        <div className="contact-item">
          <div className="contact-icon">📧</div>
          <div className="contact-label">Email</div>
          <a href="mailto:nguyenngocphu18062003@gmail.com" className="contact-value">
            nguyenngocphu18062003@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <div className="contact-icon">📱</div>
          <div className="contact-label">Phone</div>
          <a href="tel:0347418203" className="contact-value">
            0347418203
          </a>
        </div>
        <div className="contact-item">
          <div className="contact-icon">🐙</div>
          <div className="contact-label">GitHub</div>
          <a href="#" className="contact-value">
            github.com/nnphu18062003
          </a>
        </div>
      </div>
    </section>
  )
}
