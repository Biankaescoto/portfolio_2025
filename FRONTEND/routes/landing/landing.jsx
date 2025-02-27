import ReactDOM from "react-dom/client";
import React, {useState} from "react";
import Nav from "../../components/Nav/nav";
import Tiles from "../../components/tiles/tiles";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";



// TODO IMPORT TILES FOR PROJECTS. 
// TODO IMPORT NAV BAR

export default function Landing() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    // Handle success and error toasts
    // const notifySuccess = () => toast.success("Your message has been sent successfully!");
    // const notifyError = () => toast.error("Please fill out all fields.");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  

    const notifySuccess = () =>
    toast.success("Got it! I will reach out to you!");
    const notifyError = () => toast.error("Please fill out all fields.");

      // Validate if all fields are filled out
      if (!firstName || !lastName || !email || !subject || !message) {
        notifyError(); // Show error if fields are missing
        return;
      }
  
      const serviceId = "service_r9xx37a";  // Your EmailJS service ID
      const templateId = "template_gq7v6yc";  // Your EmailJS template ID
      const publicKey = "czjyf1UOHYMGOKZVf";  // Your EmailJS public key
  
      const templateParams = {
        from_firstName: firstName,
        from_lastName: lastName,
        from_email: email,
        from_subject: subject,
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
          setFirstName("");
          setLastName("");
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          notifyError();  // Show error toast
        });
    };

    return (
<main>
<Nav/>
<div className="landing-body"> 

<div id="Home"> 
</div>
{/* end of Home section */}
<div id="AboutMe">
{/* <img> </img> */}
<h1 className="about-me-title"> About me</h1>
<p className="about-me-text">
Hi, I'm Bianka Escoto, a motivated and detail-oriented software engineer with a diverse background in customer service, sales, and project management. I recently graduated with a Software Engineering Certificate, and I’m excited to bring my technical expertise, problem-solving abilities, and passion for innovation into my work as a software engineer.
</p>
<p className="about-me-text"> 
Throughout my career, I’ve had the opportunity to work in roles that required adaptability, clear communication, and effective decision-making. From de-escalating high-risk situations in customer service to managing complex projects, I’ve honed my ability to thrive in dynamic environments. As a bilingual professional, I’m able to connect with diverse teams and clients, making me well-suited for collaborative projects and global business environments.
</p>
<p className="about-me-text"> 
In my development work, I specialize in front-end and back-end technologies like React, JavaScript, Node.js, and MongoDB. I’m always looking to expand my skills and am driven by the opportunity to build solutions that enhance user experience and solve real-world problems.
</p>
<p className="about-me-text"> 
I’m passionate about creating meaningful, efficient software solutions, and I believe that every challenge is an opportunity for growth. Whether it’s collaborating on a new project, learning a new language or framework, or finding innovative solutions to complex problems, I’m excited to contribute and make a positive impact.
</p>
<p className="about-me-text">
Feel free to check out my LinkedIn, GitHub, or drop me an email—I’d love to connect!
</p>
</div>
 {/* end of about me section */}


<div className="Connect"> 
<h1 className="connect-with-me-title"> Connect </h1>
<ul className="connect-list-group">
    <li className="connect-links">
    <FaLinkedin className="link-sub-icon" />
        <a  
        href="https://www.linkedin.com/in/bianka-escoto-5213a3269" 
        target="_blank" 
        rel="noopener noreferrer"
        >
         LinkedIn</a>
    </li>
    <li className="connect-links">
    <IoLogoGithub  className="link-sub-icon"/>

        <a 
        href="https://github.com/Biankaescoto" 
        target="_blank" 
        rel="noopener noreferrer"
        > GitHub</a>
    </li>
    <li className="connect-links">
    <FaFileAlt className="link-sub-icon" />

        <a  
        href="https://docs.google.com/document/d/1mehtyO89wumRrgv9Iadrc2NH-YPwZHk3Ro8G9efzkpY/edit?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        > Resume</a>
    </li>
</ul>
</div>
{/* end of  Resume section */}



{/* //! PORTFOLIO
<div id="Portfolio">
<Tiles/>
</div> */}
{/* end of portfolio section */}



<div id="ContactMe"> 
        <h1 className="form-title">Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input
             className="inputs_firstName"
              type="text"
              placeholder="Your Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="inputs_container" > 
          <input
           className="inputs_email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
          </div>
          <textarea
           className="textarea-container"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button className="submit-button" type="submit">Send Message </button>
        </form> 
</div>
{/* end of contact me section DIV */}
</div>
</main>

    );
};