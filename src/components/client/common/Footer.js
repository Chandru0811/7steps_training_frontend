import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill, RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import Logo from '../../../assets/Logo.png';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <section>
      <div className="d-flex flex-column justify-content-center py-2 footerSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 py-2">
            <div className='d-flex py-4'>
            <img src={Logo} alt="7 STEPS" className="img-fluid ps-2" width={50} />
            <div className='mx-2 footerHeading' style={{ color: "#7C2C83" }}>7 STEPS</div>
            </div>
              <p className='footer-text para mx-2'>
                7 Steps Transformation is a life coaching company that aspires to change lives through mindset awakening and reprogramming.
              </p>
            </div>
         
            <div className="col-lg-3 col-md-6 col-12 py-2">
              <p className="footerHeading pt-3">Quick Links</p>
              <span className="footer-menu d-flex flex-column">
                <span className="footer-text">Home</span>
                <span className="footer-text">About</span>
                <span className="footer-text ">Portfolio</span>
                <span className="footer-text ">Our Courses</span>
                <span className="footer-text ">Contact Us</span>
              </span>
            </div>

            <div className="col-lg-3 col-md-6 col-12 py-2">
              <p className="footerHeading pt-3">Other Links</p>
              <span className="footer-menu d-flex flex-column">
                <span className="footer-text">Terms of Use</span>
                <span className="footer-text">Privacy Policy</span>
                <span className="footer-text">FAQ</span>
              </span>
            </div>

            <div className="col-lg-3 col-md-6 col-12 py-2">
              <p className="footerHeading pt-3">Contact</p>
              <div className="footer-menu d-flex flex-column">
                <div className='d-flex'>
                 <span><FaPhone style={{fontSize:"20px",color:"grey"}}/> </span>
                 <span className="footer-text mx-2">(+65) 90214952</span>
                </div>
                <div className='d-flex'>
                 <span><MdEmail style={{fontSize:"25px",color:"grey"}}/> </span>
                 <span className="footer-text mx-2">7stepscoach.sg@gmail.com</span>
                </div>
                <div className='d-flex'>
                 <span><FaLocationDot style={{fontSize:"25px",color:"grey"}}/> </span>
                 <span className="footer-text  mx-2"> The Alexcier, 237 Alexandra Road, #04-10, Singapore-159929.</span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyrights container-fluid'>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="text-center">2024 © Copyright 7 Steps Transformation. All Rights Reserved.</span>
          <div className='d-flex justify-content-center justify-content-md-end mt-3 mt-md-0'>
          <a href="https://wa.me/6590214952" target="_blank">
             <IoLogoWhatsapp />
            </a>
            <a href="https://instagram.com/7stepscoach?utm_source=qr&igshid=MzNlNGNkZWQ4M" target="_blank" >
             <RiInstagramFill />
            </a>
            <a href="https://www.linkedin.com/in/reihana-abdullah" target="_blank">
             <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100076189750922&mibextid=9R9pX" target="_blank">
             <RiFacebookCircleFill />
            </a>
            <a href="https://www.youtube.com/@fight2fit582" target="_blank" >
             <FaYoutube />
            </a>
            <a href="https://www.tiktok.com/@the7stepscoach?_t=8f1ZaezjUhu&_r=1" target="_blank">
             <AiFillTikTok />
            </a>
            <a href="https://www.facebook.com/Meena013?mibextid=ZbWKwL" target="_blank">
             <RiFacebookCircleFill />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
