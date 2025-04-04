import React, { useEffect, useState, useRef } from "react";
import "./navbar.css";
import Typed from "typed.js";
import portfolio from "../Image/portfolio.png";
import about from "../Image/about.png";
import portfolio1 from "../Image/portfolio1.webp";
import portfolio2 from "../Image/portfolio2.webp";
import portfolio3 from "../Image/portfolio3.jpg";
import portfolio4 from "../Image/portfolio4.jpg";
import portfolio5 from "../Image/portfolio5.webp";
import portfolio6 from "../Image/portfolio6.webp";
import ScrollReveal from "scrollreveal";

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isActive, setIsActive] = useState("#home");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isHidden, setIsHidden] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [lastScrollY, setLastScrollY] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isToggle, setIsToggle] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsHidden(currentScroll > lastScrollY);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsToggle(false); // Reset toggle on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const sr = ScrollReveal({
      distance:'80px',
      duration: 2000,
      delay: 200,
      reset: true,
    });

    sr.reveal(".home-content, .heading", { origin: "top" });
    sr.reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
    sr.reveal(".home-content h1, .about-img", { origin: "left" });
    sr.reveal(".home-content p, .about-content", { origin: "right" });



    return () => {
      sr.destroy(); // Clean up to prevent memory leaks
    };
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const typedElement = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const typedInstance = useRef(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: ["Frontend Developer", "Python Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy(); // Cleanup to prevent memory leaks
    };
  }, []);

  const handleNavClick = (section) => {
    setIsActive(section);
    setIsHidden(true); // Hide navbar on click
  };

  return (
    <div>
      <header className={`header ${isHidden ? "hidden" : ""}`}>
        <a href="#" className="logo">
          Portfolio
        </a>
        {windowWidth < 768 && (
          <i 
            onClick={() => setIsToggle(!isToggle)}
            className={`bx ${isToggle ? "bx-x" : "bx-menu"}`} 
            id="menu-icon"
          ></i>
        )}
        <nav className={`navbar ${windowWidth < 768 ? (isToggle ? "active" : "hidden") : ""}`}>
        <a href="#home" onClick={() => handleNavClick("#home")} className={isActive === "#home" ? "active" : ""}>Home</a>
        <a href="#about" onClick={() => handleNavClick("#about")} className={isActive === "#about" ? "active" : ""}>About</a>
        <a href="#services" onClick={() => handleNavClick("#services")} className={isActive === "#services" ? "active" : ""}>Services</a>
        <a href="#portfolio" onClick={() => handleNavClick("#portfolio")} className={isActive === "#portfolio" ? "active" : ""}>Portfolio</a>
        <a href="#contact" onClick={() => handleNavClick("#contact")} className={isActive === "#contact" ? "active" : ""}>Contact</a>
      </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Nikhil Kushwah</h1>
          <h3>
            And I'm a <span ref={typedElement} className="multiple-text">Frontend Developer</span>
          </h3>
          <p>
            I am a Front-end Developer skilled in React, JavaScript, and RESTful
            APIs, building responsive and user-friendly web applications. I
            enjoy creating scalable solutions, integrating front-end with
            back-end, and continuously learning new technologies.
          </p>
          <div className="social-media">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
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
            <i className="bx bx-code-alt"></i>
            <h3>Web development</h3>
            <p>
              I build responsive, user-friendly web apps with React, JavaScript,
              and RESTful APIs, specializing in custom development, API
              integration, and performance optimization for scalable solutions.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bx-bar-chart-alt"></i>
            <h3>Digital marketing</h3>
            <p>
              I offer digital marketing solutions, including SEO-optimized web
              development, social media marketing, and high-converting landing
              pages to boost brand identity and drive results.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bxs-paint"></i>
            <h3>UI/UX Design</h3>
            <p>
              I design intuitive, user-friendly UI/UX with Figma, Adobe XD, and
              Tailwind CSS, ensuring seamless, engaging experiences with
              performance optimization.
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
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
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
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
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
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
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
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
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
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
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
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2025 by codehal | All Right Reserved.</p>
        </div>
        <div className="footer-iconTop">
          <a href="#">
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>
      {/* Start working from here - video 46:21 */}
    </div>
  );
};

export default navbar;
