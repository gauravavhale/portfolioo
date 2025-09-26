import React from 'react';
import { ReactTyped } from 'react-typed';
import './App.css';
import { ScrollingTechBar } from './Components/ScrollingTechBar/ScrollingTechBar';

const App = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">

      {/* Landing Section */}
      <div className="landing row w-100 justify-content-center pt-5 pb-5">
        <div className="titleCard col-12 col-md-6">
          <div className="card shadow cardCover border-0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src="/images/cv-image6.png"
              className="card-img-top"
              alt="Profile"
              style={{ objectFit: 'cover', width: '100%', height: 'auto', transition: 'transform 0.3s ease' }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        </div>

        <div className="col-12 col-md-6 desc text-white">
          <div className="title">Hi, I'm </div>
          <h1 className="title" style={{ color: '#ffc107' }}>
            <ReactTyped
              strings={['Gaurav', 'Frontend Developer', 'Full Stack Developer']}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </h1>

          <div className="para">
            <h5>I Code What You See.</h5>
            <h5 className="text-nowrap">And I make sure you love looking at it.</h5>
          </div>

          <div className="col-12 col-md-6 d-flex align-items-center gap-4 socials mt-2">
            <span
              onClick={() => window.location.href = 'https://www.linkedin.com/in/gaurav-avhale-631690313/'}
              className="bi bi-linkedin socialIcons"
              style={{ fontSize: '25px' }}
            ></span>
            <span
              onClick={() => window.location.href = 'https://www.instagram.com/gaurav.avhale_18?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='}
              className="bi bi-instagram socialIcons"
              style={{ fontSize: '25px' }}
            ></span>
            <span
              onClick={() => window.location.href = 'mailto:avhalegaurav07@gmail.com'}
              className="bi bi-envelope socialIcons"
              style={{ fontSize: '25px' }}
            ></span>
            <span
              onClick={() => window.location.href = 'tel:8698873705'}
              className="bi bi-phone socialIcons"
              style={{ fontSize: '25px' }}
            ></span>
          </div>

          <div className="d-flex gap-3 mt-4 socials">
            <a
              className="btn"
              href="/assets/resume/Gaurav_Avhale_Resume.pdf"
              download="Gaurav_Avhale_Resume.pdf"
              style={{ background: '#ffc107' }}
            >
              <b>Resume <i className="bi bi-download"></i></b>
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about row justify-content-center">
        {/* Left Column – About Me */}
        <div className="col-12 col-md-6 text-white p-3">
          <h4 className="text-center mb-4" style={{ color: '#ffc107', fontWeight: 600 }}>
            Hire Me as a Developer
          </h4>
          <p className="text-center" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            Hi! I’m a <strong>Full-Stack Developer</strong> who transforms ideas into clean, responsive, and user-friendly web experiences. 
            I specialize in <strong>React</strong>, <strong>Next.js</strong>, <strong>JavaScript</strong>, and <strong>CSS</strong> to build modern, intuitive interfaces.
            <br /><br />
            My journey began with a simple curiosity for how websites work — and has grown into a deep passion for creating dynamic, accessible, and beautiful digital products that feel great to use.
          </p>
        </div>

        {/* Right Column – Skills */}
        <div className="col-12 col-md-6 text-white p-3">
          <h4 className="text-center mb-4" style={{ color: "#ffc107", fontWeight: 600 }}>
            Expertise
          </h4>
          <div className="d-flex flex-wrap gap-3 justify-content-center">
            {[
              'HTML', 'Tailwind CSS', 'JavaScript', 'React.js', 'Next.js', 'Bootstrap',
              'Responsive Design', 'Redux', 'jQuery', 'AJAX', 'JWT', 'RestAPI', 'GraphQl', 'Node.js', 'MongoDB'
            ].map(skill => (
              <span
                key={skill}
                className="skills px-3 py-2 rounded"
                style={{ background: '#212529', border: '1px solid #3c3b39', fontSize: '0.85rem', color: '#fff' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="project row w-100 mt-4">
        <h2 className="text-center mb-5" style={{ color: '#ffc107', fontWeight: 600 }}>
          Things I’ve Built
        </h2>

        {[{
          title: "Urban Pick",
          desc: "An online platform built with modern web technologies to showcase and manage products efficiently. It highlights my skills in building scalable, responsive, and user-friendly web applications.",
          img: "/images/urbanpick.png",
          link: "https://urban-pick.vercel.app/"
        }, {
          title: "Personal Blog",
          desc: "A modern, fully responsive blog platform built with Next.js App Router and Tailwind CSS. I use this space to share insights on web development, my journey, and life experiences.",
          img: "/images/gaurav.blog.png",
          link: "https://gauravblog-iota.vercel.app/"
        }, {
          title: "🌍 Wanderlust Travel Hub",
          desc: "A sleek, responsive travel booking website showcasing top destinations, travel packages, and seamless navigation for an inspiring user experience. Built with Next.js and Tailwind CSS.",
          img: "/images/wanderlust.png",
          link: "https://wanderlusttravelhub.vercel.app/"
        }].map((project, i) => (
          <div key={i} className="col-12 col-md-4 mb-4">
            <div
              className="card text-white h-100 p-3 shadow"
              style={{ background: '#161513', border: '2px solid #2c2a27', borderRadius: '12px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 193, 7, 0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img
                src={project.img}
                className="card-img-top mb-3 rounded"
                alt={project.title}
                style={{ objectFit: 'cover', height: '200px' }}
              />
              <div className="card-body px-0">
                <h4 className="card-title mb-2" style={{ color: '#ffc107' }}>{project.title}</h4>
                <p style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm mt-3 text-dark fw-semibold"
                  style={{ backgroundColor: '#ffc107', borderRadius: '6px', display: 'inline-flex', alignItems: 'center' }}
                >
                  <i className="bi bi-link-45deg me-1"></i> View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="row w-100 contact">
        <div>
          <ScrollingTechBar />

          <div
            className="contact-card border-2 d-flex flex-column p-4 justify-content-center align-items-center text-center text-white"
            style={{ minHeight: "380px", background: "#2e2d2b", borderRadius: "12px", borderColor: "#ffc107", boxShadow: "0 0 12px rgba(255, 193, 7, 0.2)" }}
          >
            <h1 className="mb-4" style={{ fontWeight: 600 }}>Get in Touch</h1>
            <p style={{ maxWidth: "700px", lineHeight: "1.6" }}>
              🚀 Let's build something <strong>impactful</strong> together! Whether you’ve got a project idea, a job opportunity, or just want to say hello — I’d love to hear from you.
              <br /><br />
              I'm always open to <strong>creative collaborations</strong>, <strong>freelance gigs</strong>, or just a quick tech chat ☕.
              <br />
              If you believe we can create something meaningful together, don’t hesitate to reach out.
              <br /><br />
              I usually respond within a day. Let’s connect and make something awesome happen!
            </p>

            <button
              className="btn mt-4 px-4 py-2 text-dark"
              style={{ background: '#ffc107', borderRadius: '6px', fontWeight: 500 }}
              onClick={() => window.location.href = 'mailto:avhalegaurav07@gmail.com'}
            >
              <i className="bi bi-envelope-fill me-2"></i> Contact Me
            </button>
          </div>

          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center gap-4 mt-4">
              <span onClick={() => window.location.href = 'https://www.linkedin.com/in/gaurav-avhale-631690313/'} className="bi bi-linkedin socialIcon"></span>
              <span onClick={() => window.location.href = 'https://www.instagram.com/gaurav.avhale_18?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} className="bi bi-instagram socialIcon"></span>
              <span onClick={() => window.location.href = 'mailto:avhalegaurav07@gmail.com'} className="bi bi-envelope socialIcon"></span>
              <span onClick={() => window.location.href = 'tel:8698873705'} className="bi bi-phone socialIcon"></span>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center align-content-center text-white mt-4">
              <h6 className="mb-0 pt-2">
                Created by <span className="text-warning" onClick={() => window.location.href = 'https://www.linkedin.com/in/gaurav-avhale-631690313/'}>me</span> | &copy; 2025 All rights Reserved
              </h6>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default App;
