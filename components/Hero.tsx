"use client"

import type React from "react"

export default function Hero() {
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
    <section className="hero">
      <div className="hero-content">
        <img src="/IMG_4138.JPG" alt="Nguyen Ngoc Phu" className="profile-img" />
        <h1>NGUYEN NGOC PHU</h1>
        <p className="title">COMPUTER VISION ENGINEER</p>
        <p className="subtitle">FIRMWARE INTERN</p>
        <div className="cta-buttons">
          <a href="#projects" onClick={handleSmoothScroll} className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" onClick={handleSmoothScroll} className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
