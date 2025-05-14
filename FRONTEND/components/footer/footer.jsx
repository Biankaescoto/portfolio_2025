import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

// TODO fix footer for big screen scale

export default function Footer() {


    return (
        <div className="first-foot-div">
            {/* first outer div */}
            <div className="trio-Large-box">
                {/* box one */}
            <div className="box-one">
            <h3 className="BE-footer">
                Bianka Escoto
            </h3>
            <p className="BE-1">
            "Be strong and courageous" Joshua 1:9
            </p>
            </div>
             {/* box two */}
             <div className="box-two">
                <h3 className="connect-footer"> Contact </h3>
                <p className="footer-email"> Email: biankaescoto@gmail.com</p>
                <p className="footer-cell"> Phone: (316) 925-3650</p>

             </div>
             {/* box three */}
             <div className="box-three"> 
                <h3 className="follow-title"> Follow Me</h3>
                <div className="follow-links">
                <a className="fl1"
                    href="https://www.linkedin.com/in/bianka-escoto-5213a3269"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin className="linked-in"/>
                </a>
                
                <a className="fl2" href="https://github.com/Biankaescoto" 
                target="_blank" 
                rel="noopener noreferrer"
                > <IoLogoGithub  className="git-hub"/> 
                </a>
                </div>
             </div>
            </div>

             {/* line break */}
             <div className="line"> </div>

             {/* bottom piece of footer */}
                <div className="short-text"> 
                <p className="p-1">
                © 2025 Bianka Escoto. All rights reserved.
                </p>
                {/*  */}
                <p className="p-2">

                Developed with ❤️ by Bianka
                </p>
                </div>
        </div>
    );
}