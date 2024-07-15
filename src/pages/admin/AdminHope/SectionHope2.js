import React from 'react';
import { FaCheckSquare } from "react-icons/fa";

function HopeSection2() {
    return (
        <section className='hopeSection2 pb-5'>
            <div className='container py-4'>
                <h1 className='fw-bolder text-center mb-5'>Modules</h1>
                <div className='row hopeCardRow pt-5'>
                    <div className='col-md-3 col-12 hopeImageCard1'>
                        <div className='card modulesCard p-3'>
                            <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'><span className='modulesHeading'>H</span>OPE</h1>
                            <h4 className='text-center'>HARNESSING LIFELONG HABITS</h4>
                        </div>
                    </div>
                    <div className='col-md-9 col-12'>
                        <div className='card modulesSubcard1 p-3'>
                            <ul style={{ listStyle: "none" }}>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Speaking Success (Speaking and Communicating effectively)</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Exam and Study Success (Acing Your Exams)</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Interview Success (Getting through any Interview)</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Self-Management Success (Managing your Time, Procrastination & Organisation skills/Atomic habits)</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Money Success (Money management system - Budgeting, Spending and Investing Wisely)</li>
                                <li><FaCheckSquare color="#F6C00B" className='mb-1'/> Health Success (Physical, Mental & Emotional Wellbeing - Managing Stress, Self-care,Grooming, Nutrition ,Exercise, Hobbies, Developing Creativity)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row hopeCardRow2 mt-5 pt-5'>
                    <div className='col-md-9 col-12 order-md-1 order-2'>
                        <div className='card modulesSubcard2 p-3'>
                            <ul style={{ listStyle: "none" }}>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Self Love</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Self esteem</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Self confidence</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Belief and Your Subconscious Mind</li>
                                <li><FaCheckSquare color="#F6C00B" className='mb-1'/> Positive, Resilience & Growth Mindset</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3 col-12 hopeImageCard2 order-md-2 order-1'>
                        <div className='card modulesCard p-3'>
                            <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'>H<span className='modulesHeading'>O</span>PE</h1>
                            <h4 className='text-center'>OPTIMISED MINDSET</h4>
                        </div>
                    </div>
                </div>
                <div className='row hopeCardRow pt-5' style={{ marginTop: "100px" }}>
                    <div className='col-md-3 col-12 hopeImageCard1'>
                        <div className='card modulesCard p-3'>
                            <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'>HO<span className='modulesHeading'>P</span>E</h1>
                            <h4 className='text-center'>PURPOSE, POTENTIAL AND PASSION</h4>
                        </div>
                    </div>
                    <div className='col-md-9 col-12'>
                        <div className='card modulesSubcard1 p-3'>
                            <ul style={{ listStyle: "none" }}>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Crafting your vision, mission and value (P1)</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Strength Finder/Discover your GST (gift, strength, talent)</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Developing potential</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Goal setting</li>
                                <li><FaCheckSquare color="#F6C00B" className='mb-1'/> Future Planning</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row hopeCardRow2 mt-5 pt-5'>
                    <div className='col-md-9 col-12 order-md-1 order-2'>
                        <div className='card modulesSubcard2 p-3'>
                            <ul style={{ listStyle: "none" }}>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Understanding Leadership</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Building Confidence</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Empathy</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Be the Change</li>
                                <li className='mb-3'><FaCheckSquare color="#F6C00B" className='mb-1'/> Guiding the Team - Leading Others</li>
                                <li><FaCheckSquare color="#F6C00B" className='mb-1'/> Student Leaders in Action</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-3 col-12 hopeImageCard2 order-md-2 order-1'>
                        <div className='card modulesCard p-3'>
                            <h1 style={{ color: "#7C2C83" }} className='text-center fw-bold'>HOP<span className='modulesHeading'>E</span></h1>
                            <h4 className='text-center'>EMPOWERED LEADER</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HopeSection2;