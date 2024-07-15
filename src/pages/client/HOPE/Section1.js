import React from 'react';
import Image from "../../../assets/Hope1.jpg";
import { IoSend } from "react-icons/io5";

function Section1() {
    return (
        <section className='hopeSection1 pt-5'>
            <div className='container'>
                <div className='row flex-1 justify-content-center align-items-center'>
                    <div className='col-lg-5 col-12 mb-3'>
                        <img src={Image} alt='Goal' className='img-fluid goalImg' />
                    </div>
                    <div className='col-lg-7 col-12'>
                        <h5 className='fw-bold mb-3' style={{ color: "#7C2C83" }}>Goals</h5>
                        <p className='mb-4'>To develop the 21st Century Competencies that are essential for the child to develop to prepare them for the future</p>
                        <h5 className='fw-bold mb-3' style={{ color: "#7C2C83" }}>Objectives</h5>
                        <p>To cover the 5 social emotional competencies necessary for children to develop healthy identities, recognize and manage emotion, develop a sense of responsibility, care and concern for others, relate to others an develop positive relationships, handle changes, make responsible decisions and act for the good of self, others and the society.</p>
                        <ul style={{ listStyle: "none" }}>
                            <li>1. Self Awareness</li>
                            <li>2. Self-Management</li>
                            <li>3. Responsible Decision-Making</li>
                            <li>4. Social Awareness</li>
                            <li>5. Relationship Management</li>
                        </ul>
                    </div>
                </div>
                <div className='row py-5'>
                    <h1 className='fw-bolder text-center mb-5'>Programme <span style={{ color: "#7C2C83" }}>Outcomes</span></h1>
                    <div className='col-md-6 col-lg-6 col-xl-3 col-12 mb-3'>
                        <div className='card programmeCard h-100'>
                            <div className='programmeHeading'>H</div>
                            <div className='card-body'>
                                <ul style={{ listStyle: "none" }}>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Acquire lifelong skill that help youth navigate through life</li>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Be competent</li>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Install success habits</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-3 col-12 mb-3'>
                        <div className='card programmeCard h-100'>
                            <div className='programmeHeading'>O</div>
                            <div className='card-body'>
                                <ul style={{ listStyle: "none" }}>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Create Empowering Belief</li>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Gain self-awareness through self love, self confidence and self esteem</li>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Develop positive and progressive self-identity and mindset</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-3 col-12 mb-3'>
                        <div className='card programmeCard h-100'>
                            <div className='programmeHeading'>P</div>
                            <div className='card-body'>
                                <ul style={{ listStyle: "none" }}>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Discover your purpose through aligning your Vision, Mission and Values</li>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Discover your potential through your G.S.T-Gifts, Strengths and Talents</li>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Discover your passions and create your dream vision</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-3 col-12 mb-3'>
                        <div className='card programmeCard h-100'>
                            <div className='programmeHeading'>E</div>
                            <div className='card-body'>
                                <ul style={{ listStyle: "none" }}>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Become confident leaders</li>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Become leaders with empathy</li>
                                    <li className='mb-3'><IoSend color="#7C2C83" /> Become agents of change in the world</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1;