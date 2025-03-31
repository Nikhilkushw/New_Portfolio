import React from "react";
import "./navbar.css";
import portfolio from "../Image/portfolio.png";
import about from "../Image/about.png";
import portfolio1 from "../Image/portfolio1.webp"
import portfolio2 from "../Image/portfolio2.webp"
import portfolio3 from "../Image/portfolio3.jpg"
import portfolio4 from "../Image/portfolio4.jpg"
import portfolio5 from "../Image/portfolio5.webp"
import portfolio6 from "../Image/portfolio6.webp"

const navbar = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          Portfolio
        </a>
        <i class="bx bx-menu" id="menu-icon"></i>
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Nikhil Kushwah</h1>
          <h3>
            And I'm a <span>Frontend Developer</span>
          </h3>
          <p>
            I am a Front-end Developer skilled in React, JavaScript, and RESTful
            APIs, building responsive and user-friendly web applications. I
            enjoy creating scalable solutions, integrating front-end with
            back-end, and continuously learning new technologies.
          </p>
          <div className="social-media">
            <a href="#">
              <i class="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i class="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i class="bx bxl-instagram-alt"></i>
            </a>
            <a href="#">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
          <a href="#" className="btn">
            Download CV
          </a>
        </div>
        <div className="home-img">
          <img src={portfolio} alt="" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-img">
          <img src={about} alt="about-img" />
        </div>
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Frontend developer</h3>
          <p>
            I am a Front-end Developer passionate about building user-friendly
            and responsive web applications. With expertise in React,
            JavaScript, and RESTful APIs, I focus on developing scalable
            solutions that enhance user experience. I have worked on various
            projects, including a Netflix-inspired platform, utilizing MongoDB
            and Express.js to integrate front- end and backend functionalities
            effectively. I am always eager to learn new technologies and improve
            my problem-solving abilities to stay ahead in the fast-evolving tech
            industry.
          </p>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">
          Our <span>Services</span>
        </h2>
        <div className="services-container">
          <div className="services-box">
            <i class="bx bx-code-alt"></i>
            <h3>Web development</h3>
            <p>
              I provide frontend development services, building responsive and
              user-friendly web applications using React, JavaScript, and
              RESTful APIs. My expertise includes custom web development, API
              integration, performance optimization, and UI/UX enhancements to
              deliver high-quality, scalable solutions.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i class="bx bx-bar-chart-alt"></i>
            <h3>Digital marketing</h3>
            <p>
              I provide digital marketing solutions to help businesses grow
              online through SEO-optimized web development, social media
              marketing, and high-converting landing pages. By combining modern
              marketing strategies with responsive design, I enhance brand
              identity and drive measurable results.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i class="bx bxs-paint"></i>
            <h3>UI/UX Design</h3>
            <p>
              I create intuitive, visually appealing, and user-friendly UI/UX
              designs using modern tools like Figma, Adobe XD, and Tailwind CSS.
              By combining user-centric design principles with performance
              optimization, I ensure seamless and engaging experiences across
              all devices.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src={portfolio1} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                I design visually appealing, responsive, and user-friendly
                websites that enhance brand identity and user experience. By
                focusing on modern design principles and performance
                optimization, I create engaging web interfaces that work
                seamlessly across all devices.
              </p>
              <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={portfolio2} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                I design visually appealing, responsive, and user-friendly
                websites that enhance brand identity and user experience. By
                focusing on modern design principles and performance
                optimization, I create engaging web interfaces that work
                seamlessly across all devices.
              </p>
              <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={portfolio3} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                I design visually appealing, responsive, and user-friendly
                websites that enhance brand identity and user experience. By
                focusing on modern design principles and performance
                optimization, I create engaging web interfaces that work
                seamlessly across all devices.
              </p>
              <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={portfolio4} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                I design visually appealing, responsive, and user-friendly
                websites that enhance brand identity and user experience. By
                focusing on modern design principles and performance
                optimization, I create engaging web interfaces that work
                seamlessly across all devices.
              </p>
              <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={portfolio5} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                I design visually appealing, responsive, and user-friendly
                websites that enhance brand identity and user experience. By
                focusing on modern design principles and performance
                optimization, I create engaging web interfaces that work
                seamlessly across all devices.
              </p>
              <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={portfolio6} alt="" />
            <div className="portfolio-layer">
              <h4>Web Design</h4>
              <p>
                I design visually appealing, responsive, and user-friendly
                websites that enhance brand identity and user experience. By
                focusing on modern design principles and performance
                optimization, I create engaging web interfaces that work
                seamlessly across all devices.
              </p>
              <a href="#"><i class='bx bx-link-external'></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span></h2>

        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </div>
  );
};

export default navbar;
