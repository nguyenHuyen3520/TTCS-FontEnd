import React from 'react';
import Helmet from "../components/Helmet"
import { AiFillRead } from "react-icons/ai";
import { MdIntegrationInstructions } from "react-icons/md";
import { GrScheduleNew } from "react-icons/gr";
const Home = () => {
    return (
        <Helmet title="HomePage">
            <div className="Home">
                <div className="Home__homeHero">
                    <div className="Home__homeHero__text">
                        <h4>Learn HTML , CSS , Web Apps & More</h4>
                        <h5>Learn How To Build Websites & Apps Write A Code Or Start A Business</h5>
                        <button>View Course</button>
                    </div>
                </div>
                <div className="Home__section1">
                    <div className="Home__section1__child1">
                        <div style={{ display: 'flex' }}>
                            <div className="Home__section1__child1__icons">
                                <AiFillRead className="icon" />
                            </div>
                            <div>
                                <div>
                                    1000 online courses
                                </div>
                                <div>
                                    Enjoy a variety of fresh topics
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className="Home__section1__child1__icons">
                                <MdIntegrationInstructions className="icon" />
                            </div>
                            <div>
                                <div>
                                    Expert instruction
                                </div>
                                <div>
                                    Find the right instructor for you
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className="Home__section1__child1__icons">
                                <GrScheduleNew className="icon" />
                            </div>
                            <div>
                                <div>
                                    Lifetime access
                                </div>
                                <div>
                                    Learn on your schedule
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '10px', width: '100%', backgroundColor: '#303030', bottom: 0, position: 'absolute' }}>

                    </div>
                    <div style={{ paddingTop: "100px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 140" fill="#303030" class="makeStyles-bottomSwoop-866"><path d="M0 140h1440V46.75C1360.635 15.583 1268.302 0 1163 0 812.13 0 674 113.78 370.736 127.279 188.866 135.374 65.286 119.625 0 80.03V140z"></path></svg>
                    </div>
                </div>
                <div className="Home__section2">
                    <div className="Home__section2__title">
                        <div style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '10px' }}>
                            The world's most useless selection of courses
                        </div>
                        <div style={{ fontSize: '1rem' }}>
                            Choose from 1000 online video courses with new additions published every decade
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="Home__section3">
                    <div>
                        <svg viewBox="0 0 1430 140" class="makeStyles-topSwoop-2668" fill="#303030" xmlns="http://www.w3.org/2000/svg"><path d="M1440 0v59.969c-65.287-39.594-188.865-55.343-370.736-47.248C766 26.221 627.87 140 277 140 171.698 140 79.365 124.417 0 93.25V0h1440z"></path></svg>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '70px'}}>
                        <div>
                            <div style={{textAlign: 'center', fontSize: '2rem'}}>
                                Choose and Enroll your favor courses
                            </div>
                            <div style={{fontSize: '1.25rem'}}>
                            Simply sign up as a verified user on Course Hub to start to access many good course resourses.
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Helmet>
    )
}

export default Home