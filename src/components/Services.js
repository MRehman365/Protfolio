import React from 'react'
import './services.css'
import Construction from './under_construction_PNG46.png';

const Services = () => {
  return (
    <div className='App mt-5'>
      <Header />
      <Introduction />
      <SServices />
      <Technologies />
      <Process />
      <Portfolio />
      <Contact />
   </div>
  )
}
const Header = () => (
  <header>
    <h1>My Services</h1>
    <p>Creating Interactive, User-Friendly, and Modern Web Experiences</p>
  </header>
);

const Introduction = () => (
  <section id="introduction">
    <h2>About Me</h2>
    <p>As a dedicated frontend developer, I specialize in crafting high-quality, responsive websites and web applications that deliver exceptional user experiences. With a strong focus on performance and design, I bring your digital vision to life.</p>
  </section>
);

const SServices = () => (
  <section id="services">
    <h2>Services Offered</h2>
    <ul>
      <li>
        <h3>Website Development</h3>
        <p>Building responsive and interactive websites using modern technologies like HTML, CSS, and JavaScript.</p>
      </li>
      <li>
        <h3> Design and Layout Adjustments</h3>
        <p> Refreshing the website’s design to align with current branding guidelines and advertising trends.</p>
      </li>
      <li>
        <h3>UI/UX Design Implementation</h3>
        <p>Translating design mockups from tools like Figma, Sketch, or Adobe XD into functional web pages.</p>
      </li>
      <li>
        <h3>Performance Optimization</h3>
        <p>Optimizing websites for speed and performance to enhance user experience and SEO.</p>
      </li>
      <li>
        <h3>Regular Content Updates</h3>
        <p>Adding, updating, or removing website content, including text, images, videos, and blog posts.</p>
      </li>
      <li>
        <h3>Responsive Design</h3>
        <p>Creating mobile-first designs that provide an optimal viewing experience on any device.</p>
      </li>
      <li>
        <h3>Code Refactoring and Maintenance</h3>
        <p>Improving existing codebases for better performance, readability, and maintainability.</p>
      </li>
    </ul>
  </section>
);

const Technologies = () => (
  <section id="technologies">
    <h2>Technologies and Tools</h2>
    <ul>
      <li><strong>Languages and Frameworks:</strong> HTML, CSS, JavaScript, React</li>
      <li><strong>Tools and Platforms:</strong> Git, Webpack, Babel, NPM/Yarn, Bootstrap, Tailwind CSS</li>
      <li><strong>Design Tools:</strong> Figma, Sketch, Adobe XD, Photoshop</li>
    </ul>
  </section>
);

const Process = () => (
  <section id="process">
    <h2>Process</h2>
    <ol>
      <li><strong>Consultation:</strong> Understanding client needs and project requirements.</li>
      <li><strong>Planning:</strong> Outlining the project scope, timelines, and deliverables.</li>
      <li><strong>Development:</strong> Writing clean, efficient code and implementing designs.</li>
      <li><strong>Testing:</strong> Conducting thorough testing for bugs and performance issues.</li>
      <li><strong>Deployment:</strong> Launching the website and ensuring it runs smoothly.</li>
      <li><strong>Maintenance:</strong> Providing ongoing support and updates.</li>
    </ol>
  </section>
);

const Portfolio = () => (
  <section id="portfolio">
    <h2>Portfolio</h2>
    <p>Case studies and client testimonials coming soon!</p>
  </section>
);

const Contact = () => (
  <section id="contact">
    <h2>Contact Me</h2>
    <p>Ready to start your project? <a href="#">Contact Me</a></p>
    <p>Email: rehmanarshad365@gmail.com</p>
    <p>Phone: +92 3167811079</p>
    <p>Social Media: <a href="https://www.linkedin.com">LinkedIn</a>, <a href="https://github.com">GitHub</a>, <a href="https://twitter.com">Twitter</a></p>
  </section>
);
export default Services
