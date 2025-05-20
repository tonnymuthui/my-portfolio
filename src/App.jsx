import React, { useEffect } from 'react';
import { FiDownload, FiCode, FiMonitor, FiBarChart2, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import profImage from "./assets/me3.PNG";
import psyche from "./assets/Psychelogo1.jpg";
import trip from "./assets/triplogo.png";
import kozi from "./assets/kozi.png";
import blank from "./assets/blank.png";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="container">
    <div className="app">

      {/* Hero Section */}
      <section className="section hero neumorphic" data-aos="fade-down">
        <div className="hero-img neumorphic">
          <img src={profImage} alt="Profile" />
        </div>
        <h1>Hello, I'm <span className="highlight">Tonny Muthui</span></h1>
        <p className="subtitle">I am Software Engineer</p>
        <div>
        <a href="" className="btn" style={{ marginRight: "1rem"}}>
          <FiDownload size={20} style={{ marginRight: 8 }} />
          Download CV
        </a>  
        <a href="https://www.linkedin.com/in/tonny-muthui-8754961a0" className='btn' aria-label="LinkedIn" style={{ marginLeft: "1rem"}}>    My LinkedIn<FiLinkedin size={24} /> 
        </a>
        </div>
      </section>

      {/* About Me */}
      <section className="section about" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I am a recent BSc. Software Engineering graduate. <br/>
          I enjoy solving real-world problems and continuously improving my skills. <br/>
          I have about 2 years of real world experience in fast-paced developing environment. And a track record of performing and working well individually and as part of a cross-functional team. <br/>
          I am very interested in the whole software engineering life cycle from idea inception to implementation to testing to iterating alternative solutions until finally I deliver a complete product, I find it extremely rewarding.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="section skills" data-aos="fade-right">
  <h2>Technical Skills</h2>
  <div className="skills-categories">

    {/* Programming Languages Card */}
    <div className="neumorphic skill-card" data-aos="zoom-in" data-aos-delay="100">
      <h3>Programming Languages</h3>
      <div className="skill-list">
        <span className="skill-tag">JavaScript</span>
        <span className="skill-tag">ReactJS</span>
        <span className="skill-tag">CSS</span>
        <span className="skill-tag">Node.js</span>
        <span className="skill-tag">Django</span>
        <span className="skill-tag">PHP</span>
      </div>
    </div>

    {/* Platforms Card */}
    <div className="neumorphic skill-card" data-aos="zoom-in" data-aos-delay="200">
      <h3>Platforms</h3>
      <div className="skill-list">
        <span className="skill-tag">Postman</span>
        <span className="skill-tag">GitHub</span>
        <span className="skill-tag">PostgreSQL</span>
        <span className="skill-tag">SQLite</span>
        <span className="skill-tag">mySQL</span>
        <span className="skill-tag">Netlify</span>
        <span className="skill-tag">Vercel</span>
        <span className="skill-tag">Firebase</span>
      </div>
    </div>

    {/* Principles Card */}
    <div className="neumorphic skill-card" data-aos="zoom-in" data-aos-delay="300">
      <h3>Principles</h3>
      <div className="skill-list">
        <span className="skill-tag">RESTful API & Axios and Fetch</span>
        <span className="skill-tag">Data Structures</span>
        <span className="skill-tag">CI/CD</span>
        <span className="skill-tag">AI/ML</span>
        <span className="skill-tag">GraphQL</span>
      </div>
    </div>

  </div>
</section>



      {/* Services */}
      <section className="section services" data-aos="fade-left">
        <h2>Services</h2>
        <div className="services-grid">
          <div className="card neumorphic" data-aos="flip-left" data-aos-delay="100">
            <FiCode size={32} className="icon" />
            <h3>Web Development</h3>
            <p>Building responsive and interactive websites.</p>
          </div>
          <div className="card neumorphic" data-aos="flip-left" data-aos-delay="200">
            <FiMonitor size={32} className="icon" />
            <h3>UI/UX Design</h3>
            <p>Designing clean and user-friendly interfaces.</p>
          </div>
          <div className="card neumorphic" data-aos="flip-left" data-aos-delay="300">
            <FiBarChart2 size={32} className="icon" />
            <h3>SEO Optimization</h3>
            <p>Improving visibility and performance.</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section projects" data-aos="fade-up">
        <h2>Projects</h2>
        <h3>Here are some of my recent personal projects</h3>
        <div className="projects-grid">
          <div className="project-card neumorphic" data-aos="zoom-in" data-aos-delay="100">
            <img src={trip} alt="Project Thumbnail" />
            <h3>Trip Logger | React & Django | </h3>
            <p>A web application that helps Long haul drivers log their time and activities.</p>
            <a href="https://trip-planner-six-jade.vercel.app/" className="project-link">View Live</a>
          </div>
          <div className="project-card neumorphic" data-aos="zoom-in" data-aos-delay="200">
            <img src={psyche} alt="Project Thumbnail" />
            <h3>Psyche | React & Django & ML |</h3>
            <p>Mental Health App</p>
            <a href="https://github.com/tonnymuthui/psyche-ai" className="project-link">View On Github <FiGithub size={18}/></a>
          </div>
          <div className="project-card neumorphic" data-aos="zoom-in" data-aos-delay="200">
            <img src={blank} alt="Project Thumbnail" />
            <h3>Ecommerce web app | React & NodeJS |</h3>
            <p>E- commerce</p>
            <a href="https://github.com/tonnymuthui/ecommerce" className="project-link">View on GitHub <FiGithub size={18}/></a>
          </div>
          <div className="project-card neumorphic" data-aos="zoom-in" data-aos-delay="200">
            <img src={kozi} alt="Project Thumbnail" />
            <h3>Kozi Connect | PHP |</h3>
            <p>Company Website</p>
            <a href="https://www.kozi.co.ke" className="project-link">View Live</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer neumorphic" data-aos="fade-up">
        <p>Contact: tdmuthui@gmail.com <FiMail style={{ marginLeft: 8 }} /></p>
        <p className="social-links">
          <a href="https://github.com/tonnymuthui" aria-label="GitHub"><FiGithub size={24} /></a> | 
          <a href="https://www.linkedin.com/in/tonny-muthui-8754961a0" aria-label="LinkedIn"><FiLinkedin size={24} /></a>
        </p>
        <p>💙 by Muthui</p>
      </footer>

    </div>
    </div>
  );
}

export default App;
