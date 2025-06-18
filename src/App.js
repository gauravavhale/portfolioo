import React from 'react'
import { ReactTyped } from 'react-typed'
import './App.css'
import {ScrollingTechBar} from './Components/ScrollingTechBar/ScrollingTechBar'
import SplashCursor from './Components/SplashCursor/SplashCursor'

const App = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
  {/* <SplashCursor/> */}
  {/* Landing Section */}
  <div className="landing row w-100 justify-content-center pt-5 pb-5">
    <div className="titleCard col-12 col-md-6">
      <div className="card shadow cardCover">
        <img src="images/cv-image6.png" className="card-img-top" alt="Profile" />
      </div>
    </div>
    <div className="col-12 col-md-6 desc text-white">
      <div className=" title">Hi, I'm </div>
      <h1 className="title text-danger">
      <ReactTyped strings={['Gaurav', 'Web Developer' ,'Frontend Developer','Full Stack Developer']} typeSpeed={40} backSpeed={50} loop />
      </h1>
      <div className="para">
        <h5>I Code What You See.</h5>
        <h5 className='text-nowrap'>And I make sure you love looking at it.</h5>
      </div>

      <div className='col-12 col-md-6 d-flex align-items-center gap-4 socials mt-2'>
        <span onClick={()=> window.location.href = 'https://www.linkedin.com/in/gaurav-avhale-631690313/'} className='bi bi-linkedin socialIcons' style={{fontSize:'25px'}}></span>
        <span onClick={()=> window.location.href = 'https://www.instagram.com/gaurav.avhale_18?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} className='bi bi-instagram socialIcons' style={{fontSize:'25px'}}></span>
        <span onClick={()=> window.location.href = 'mailto:avhalegaurav07@gmail.com'} className='bi bi-envelope socialIcons' style={{fontSize:'25px'}}></span>
        <span onClick={()=> window.location.href = 'tel:8698873705'} className='bi bi-phone socialIcons' style={{fontSize:'25px'}}></span>
      </div>

      <div className="d-flex gap-3 mt-4">
        <a className='btn' href='/assets/resume/Gaurav_Avhale_Resume.pdf' download='Gaurav_Avhale_Resume.pdf' style={{background:'#feb02a'}}><b>Resume <i className='bi bi-download'></i></b></a>
      </div>
    </div>
  </div>

  {/* About Section */}
  <div className="about row justify-content-center">
    <div className="col-12 col-md-6 text-white p-3">
      <h4 className='text-center mb-4' style={{color:'#ffc107'}}>Hire me as a developer</h4>
      <small className='text-center d-block'>
        "Hi! I’m a frontend developer who loves turning ideas into clean, responsive websites. I work with React, Next.js, JavaScript, and CSS to build smooth, user-friendly web experiences."<br/>
        "My journey started with a simple curiosity for how things work on the web and grew into a passion for crafting dynamic, visually appealing interfaces that feel great to use."
      </small>
    </div>
    <div className="col-12 col-md-6 text-white p-3">
      <h4 className="text-center mb-4" style={{color:"#ffc107"}}>Expertise</h4>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {['HTML', 'CSS', 'Javascript', 'ReactJs', 'NextJs', 'Bootstrap', 'Responsive Design' ,'Redux', 'jQuery' , 'Ajax', 'UI/UX' , 'NodeJs', 'MongoDb'].map(skill => (
          <small key={skill} className="skills bg-dark px-2 py-1 rounded text-sm">{skill}</small>
        ))}
      </div>
    </div>
  </div>

  {/* Projects Section */}
  <div className='project row w-100 mt-4'>
    <h2 className=' text-center p-0 m-0 mb-5' style={{color:'#ffc107'}}>Projects</h2>

    <div className='col-12 col-md-4 mb-3'>
      <div className='card custom-medium text-white mt-1 mb-4 p-4' style={{background:'#161513', border:"5px solid #211f1c"}}>
        <div>
          <img src="/images/ecommerce.png" style={{objectFit:"cover"}} className='card-img-top h-100 w-100' alt="Project 1" />
        </div>
        <div className='card-body'>
          <h4 className='card-title text-white'>E-Commerce Website</h4>
          <p>A Complete e-commerce platform built with
          React, allowing users to browse products,
          add items to cart. This project demonstrates
          my abilities in frontend development
          and state management</p>
           <a href='https://swift-cart-gaurav-avhales-projects.vercel.app/' target='__blank' className='text-warning text-decoration-none'><i className='bi bi-link-45deg'></i> View Project</a>
        </div>
      </div>
    </div>

    <div className='col-12 col-md-4 mb-3'>
      <div className='card custom-medium text-white mt-1 mb-4 p-4' style={{background:'#161513', border:"5px solid #211f1c"}}>
        <div>
          <img src="/images/expenseTracker.png" style={{objectFit:"cover"}} className='card-img-top h-100 w-100' alt="Project 1" />
        </div>
        <div className='card-body'>
          <h4 className='card-title text-white'>Expense Tracker</h4>
          <p>A Expensive-Tracker application that helps users manage and monitor their daily expenses. Build with React and local storage for persistant state, and a user-friendly interface.</p>
           <a href='' target='__blank' className='text-warning text-decoration-none'><i className='bi bi-link-45deg'></i> View Project</a>
        </div>
      </div>
    </div>

    <div className='col-12 col-md-4  mb-3'>
      <div className='card custom-medium text-white mt-1 mb-4 p-4' style={{background:'#161513', border:"5px solid #211f1c"}}>
        <div>
          <img src="/images/portfolio.png" style={{objectFit:"cover"}} className='card-img-top h-100 w-100' alt="Project 1" />
        </div>
        <div className='card-body'>
          <h4 className='card-title text-white'>Portfolio Website</h4>
          <p>A fully responsive portfolio website crafted with React, Next.js, and Framer Motion. Features include smooth animations, modern UI/UX design, and optimized performance for fast load times.</p>
           <a href='https://portfolio-gaurav-avhales-projects.vercel.app/' target='__blank' className='text-warning text-decoration-none'><i className='bi bi-link-45deg'></i> View Project</a>
        </div>
      </div>
    </div>

    
  </div>

  <div className='row w-100 contact'>
    <div>

      <ScrollingTechBar/>

      <div className='contact-card border-2 flex-column p-4 justify-content-center align-content-center text-center text-white' style={{minHeight:"350px", background:"#2e2d2b", borderRadius:"10px"}}>
        <h1 className='mb-4'>Get in Touch</h1>
        <p>Let's Build Something Great Together!
           Whether you have a project in mind, a job opportunity, or just want to say hello, I’d love to hear from you.<br/>
           I’m always open to new ideas, creative collaboration, or a quick tech chat.
           Drop me a message anytime, I’ll get back to you as soon as I can.
           Let’s connect and make something awesome happen!</p>
        <button className='btn btn-warning mt-4' onClick={() => window.location.href = 'mailto:avhalegaurav07@gmail.com'}><small>Contact Me</small></button>
      </div>

    <div className='row'>   
      <div className='col-12 col-md-6 d-flex justify-content-center align-items-center gap-4 mt-4'>
        <span onClick={()=> window.location.href = 'https://www.linkedin.com/in/gaurav-avhale-631690313/'} className='bi bi-linkedin socialIcon'></span>
        <span onClick={()=> window.location.href = 'https://www.instagram.com/gaurav.avhale_18?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} className='bi bi-instagram socialIcon'></span>
        <span onClick={()=> window.location.href = 'mailto:avhalegaurav07@gmail.com'} className='bi bi-envelope socialIcon'></span>
        <span onClick={()=> window.location.href = 'tel:8698873705'} className='bi bi-phone socialIcon'></span>
      </div>
      <div className='col-12 col-md-6 d-flex justify-content-center align-content-center text-white mt-4'>
        <h6 className='mb-0 pt-2'>Created by <span className='text-warning' onClick={()=> window.location.href = 'https://www.linkedin.com/in/gaurav-avhale-631690313/'}>me</span> | &copy; 2025 All rights Reserved</h6>
      </div>
    </div>

    </div>
  </div>

</div>

  )
}

export default App