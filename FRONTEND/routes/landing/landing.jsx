import ReactDOM from "react-dom/client";
import React, {useState} from "react";
import Nav from "../../components/Nav/nav";
// import Tiles from "../../components/tiles/tiles";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import Footer from "../../components/footer/footer"


// import for title orbit
import { useEffect, useRef } from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaGithub, FaCss3Alt, 
} from 'react-icons/fa';
import {
  SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiSass
} from 'react-icons/si';

const icons = [
  { icon: <SiJavascript />, name: 'javascript' },
  { icon: <SiMongodb />, name: 'mongodb' },
  { icon: <SiExpress />, name: 'express' },
  { icon: <SiTailwindcss />, name: 'tailwind' },
  { icon: <SiSass />, name: 'sass' },
  { icon: <FaHtml5 />, name: 'html' },
  { icon: <FaNodeJs />, name: 'node' },
  { icon: <FaReact />, name: 'react' },
  { icon: <FaGithub />, name: 'github' },
  { icon: <FaCss3Alt />, name: 'css' },
];


// TODO fix contact form
export default function Landing() {

  // orbit
  const orbitRef = useRef(null);

  useEffect(() => {
    const radius = 600;
    let angle = 0;

    const update = () => {
      const children = orbitRef.current.children;
      const count = children.length;
      const spacingFactor = 0.9
      angle += 0.01;

      for (let i = 0; i < count; i++) {
        const step = (2 * Math.PI) / count;
        const a = i * step + angle;
        // const a = (i * (2 * Math.PI) /count ) + angle;
        const x = radius * Math.cos(a);
        const z = radius * Math.sin(a); // depth

        const scale = 1 + z / (2 * radius); // scale icon based on depth
        const opacity = 0.5 + 0.5 * (z / radius); // lighter when far, darker when near
        const zIndex = Math.round(z); // for overlap

        const icon = children[i];
        icon.style.transform = `translateX(${x}px) scale(${scale})`;
        icon.style.opacity = opacity;
        icon.style.zIndex = zIndex;
      }

      requestAnimationFrame(update);
    };

    update();
  }, []);


  // contact form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  
    // Handle success and error toasts
    const notifySuccess = () => toast.success("Your message has been sent successfully!");
    const notifyError = () => toast.error("Please fill out all fields.");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  

    const notifySuccess = () =>
    toast.success("Got it! I will reach out to you!");
    const notifyError = () => toast.error("Please fill out all fields.");

      // Validate if all fields are filled out
      if (!name || !email || !message) {
        notifyError(); // Show error if fields are missing
        return;
      }
  
      const serviceId = "service_r9xx37a";  // Your EmailJS service ID
      const templateId = "template_gq7v6yc";  // Your EmailJS template ID
      const publicKey = "czjyf1UOHYMGOKZVf";  // Your EmailJS public key
  
      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: "Bianka Escoto", 
      };
  
      // Send email via EmailJS
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          notifySuccess();  // Show success toast
          // Clear the form after submission
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          notifyError();  // Show error toast
        });
    };

    return (
<main>
<div className="landing-body"> 
<Nav/>

 {/* orbit title */}
 <div className="about-container">
      <h1 className="about-title">Bianka Escoto</h1>
      <h2 className="about-sub-title"> Software Development Engineer </h2>
      <div className="orbit" ref={orbitRef}>
        {icons.map(({ icon, name }, i) => (
          <div className="orbit-icon" key={i}>{icon}</div>
        ))}
      </div>
    </div>
<div id="Home"> 
</div>
{/* end of Home section */}
<div id="Vision">
{/* <img> </img> */}
<h1 className="vision-title"> About Me</h1>
<p className="vision-text">
Hi, I'm Bianka Escoto, a motivated and detail-oriented software engineer with a diverse background in customer service, sales, and project management. I’m excited to bring my technical expertise, problem-solving abilities, and passion for innovation into my work as a software engineer.
</p>
<p className="vision-text"> 
In my development work, I specialize in front-end and back-end technologies like React, JavaScript, SCSS, CSS, Node.js, and MongoDB. I’m always looking to expand my skills and am driven by the opportunity to build solutions that enhance user experience and solve real-world problems.
</p>
<p className="vision-text"> 
I’m passionate about creating meaningful, efficient software solutions, and I believe that every challenge is an opportunity for growth. Whether it’s collaborating on a new project, learning a new language or framework, or finding innovative solutions to complex problems, I’m excited to contribute and make a positive impact.
</p>
<p className="vision-text">
Feel free to check out my LinkedIn, GitHub, or drop me an email—I’d love to connect!
</p>
</div>
 {/* end of about me section */}


<div className="Connect"> 
<h1 className="connect-with-me-title"> 
Connect with Me!
</h1>
<ul className="connect-list-group">
    <li className="connect-links">
        <a  
        href="https://www.linkedin.com/in/bianka-escoto-5213a3269" 
        target="_blank" 
        rel="noopener noreferrer"
        > <FaLinkedin className="link-sub-icon" /> </a>
    </li>
    <li className="connect-links">
        <a 
        href="https://github.com/Biankaescoto" 
        target="_blank" 
        rel="noopener noreferrer"
        > <IoLogoGithub  className="link-sub-icon"/></a>
    </li>
    <li className="connect-links">
        <a  
        href="https://docs.google.com/document/d/1mehtyO89wumRrgv9Iadrc2NH-YPwZHk3Ro8G9efzkpY/edit?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        > <FaFileAlt className="link-sub-icon" /></a>
    </li>
</ul>
</div>
{/* end of  Resume section */}

{/* Certified section */}

<div className="certified-1">
  <div> 
  <h1 className="c1-title"> Certified</h1>
  <img  className="cert-img" src="/certifications/certificate.jpeg"  alt="certificate" />
  </div>
</div>
{/* contact form */}
<div id="ContactMe"> 
  <h1 className="form-title">Get in Touch</h1>
  <form onSubmit={handleSubmit} className="contact-form">
    
    <div className="inputs-container">
      <label className="input-label" htmlFor="firstName">Name</label>
      <input
      // dont change classname for firstName even tho variable has been changed
        className="inputs_firstName"
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>

    <div className="inputs-container">
      <label className="input-label" htmlFor="email">Email</label>
      <input
        className="inputs_email"
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>

    <div className="inputs-container">
      <label className="input-label" htmlFor="message">Message</label>
      <textarea
        className="inputs_textarea"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
    </div>

    <div className="button-container">
      <button className="submit-button" type="submit">Send Message</button>
    </div>
    
  </form> 
</div>

{/* end of contact me section DIV */}
<Footer/>
</div>
</main>

    );
};
