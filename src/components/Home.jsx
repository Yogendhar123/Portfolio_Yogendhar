import React from "react";

import pic from "../../public/photo.avif1.jpeg";
import { FaAngular } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
          
            <div className="flex flex-col  space-y-3 text-2xl md:text-4xl">
              <h1>Hello, I'm Yogendhar</h1>
             
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Web Developer"]}
                typeSpeed={120}
                backSpeed={40}   
                showCursor={false}
                loop={false}            
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Results-driven Frontend Web Developer with more than 2 years of
              experience in designing and developing responsive and user-centric
              interfaces using React and Angular.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      {/* <FaSquareFacebook className="text-2xl cursor-pointer" /> */}
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/yogendhar-sri-ram-bolisetti" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" style={{color:"#0a66c2"}} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/yogendharb?igsh=Mmhmc2Q3Y3ZzazJl" target="_blank">
                      <FaInstagramSquare className="text-2xl cursor-pointer" style={{color:"#dc3c3c"}} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Yogendhar123" target="_blank">
                      <FaGithubSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaAngular className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
               
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
               
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[475px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
