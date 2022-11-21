import "./treatment.css";
import Fade from 'react-reveal/Fade';
import moonlightOne from "../../assets/images/xpanda.jpg";
import veniceCanal from "../../assets/images/roberto-nickson-b650UcXvYUk-unsplash.jpg";
import sunsetRoad from "../../assets/images/sunset-road.jpg";
// import playa from "../../assets/images/playa.jpeg";
import playaTwo from "../../assets/images/playa2.jpg";
import { useState, useRef } from 'react';


function Treatment() {

    const form = useRef();
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = contactForm;
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <section id="treatment-page">

            <div id="treatment-top">
                <Fade up>
                    <h1>Treatment</h1>
                    <p>We work with you to create a personalized treatment plan based on the information shared at intake, during the bio-psych-social assessment, and through ongoing through individual sessions and family sessions by identifying a few key factors:</p>

                    <li>Statement of problems to be addressed</li>
                    <li>Set forth objectives to address each problem</li>
                    <li>Steps for us to take to accomplish these objectives together</li>
                    <li>Set forth desired target dates to execute these goals</li>

                </Fade>
            </div>
            <div id="treatmentTwo">
                <Fade left>
                    <img src={moonlightOne} alt="moonlight landscape" />
                </Fade>
                <Fade right>
                    <div id="treatmentTwo-text">
                        <h2>Get the Treatment That's Right For You</h2>
                        <p>With a higher level of resident support and accountability, our resident-centered approach advances the healing of you. Once you complete detoxification, your treatment starts with a minimum 25 hours of clinical treatment per week.</p>
                        <p>*All of our group therapy sessions are facilitated by licensed/certified treatment professionals. Some groups may be co-facilitated by a registered intern under the supervision of a licensed/certified professional</p>
                        
                        <h2>Address Your Emotions</h2>
                        <p>Weekly group sessions with an emphasis on increasing self-esteem. Stay ready for whatever life throws at your by discovering how your thoughts, experiences, and behavior affect your emotions.</p>
                       
                        <h2>Prevent Relapse</h2>
                        <p>The ability to recognize the signs and symptoms of relapse is an important way to prevention. We helpy you identify and learn about alternate behavioral patterns, so you can avoid situations that may trigger a relapse.</p>
                        
                        <h2>Strengthen Family Dynamics</h2>
                        <p>Family members and others in your support system are encouraged to participate in group and individual counseling. Recovery is also a chance for you and your loved ones to process how addiction affects everyone in a support system.</p>
                        
                        <h2>Monitor Your Progress</h2>
                        <p>We keep your treatment plan documented in a secure digital archive and update it every 30 days as you meet your objectives or your needs change.</p>
                    
                        <h2>Incidental Medical Services (IMS)</h2>
                        <p>Access to Incidental Medical Services to address medical issues associated with detoxification and the provision of addiction treatment while you focus on long-term recovery.</p>
                        <p>*Ocean Valley IMS does not include the provision of general primary medical care.</p>
                    </div>
                </Fade>
            </div>
            <div id="treatmentThree">
                <Fade left>
                    <div id="treatmentThree-text">
                        <h2>12-Step Group Support</h2>
                        <p>Begin your healing at our premier recovery facility, with a treatment protocol rooted in a 12-step approach that encourages you to attend dally AA and NA meetings, including options to attend additional Al-Anon (Co-Dependents Anonymous) meetings for those who may benefit.</p>
                        
                        <h2>Individual Counseling and Therapy Sessions</h2>
                        <p>Every week, you will meet with your own primary certified drug and alcohol treatment counselor, as well as a prmary therapist.</p>
                        <p>*All individual therapy and counseling sessions are done with a certified drug/alcohol treatment counselor and full-licensed MFT/LCSW or similar.</p>
                        
                        <h2>Daily Discussion</h2>
                        <p>Join an open and interactive discussion of the "Topic of the Day" where you can speak your mind and provide feedback for your peers.</p>
                        
                        <h2>Weekly Group Discussion</h2>
                        <p>Along with Topic Discussion, get a chance to share your thoughts and deliver feedback to others in a safe and interactive group setting each week.</p>
                   
                        <h2>Learn About Chemical Dependency</h2>
                        <p>Join in group discussion on a variety of topics, including chemical dependency, cross-addiction, 12-step support groups, and more. Develop better habits and improve dysfunctional patterns in your life.</p>

                        <h2>Individual Journaling</h2>
                        <p>Putting your thoughts down on paper can help you gain new insights into your emotions, thoughts, and feelings. Also utilized in individual sessions with your therapist and counselor to help identify and process your feelings.</p>
                    
                    </div>
                </Fade>
                <Fade right>
                    <img src={veniceCanal} alt="Venice Canals" />
                </Fade>
            </div>
            {/* <div id="treatmentFour">
                <Fade left>
                    <img src={sunsetRoad} alt="sunset road" />
                </Fade>
                <Fade right>
                    <div id="treatmentFour-text">
                        <h3>Recovery and Treatment Planning</h3>
                        <p>Ocean Valley Behavioral Health ensures that all residents are actively involved in developing treatment plans. The treatment plan developed includes the following: </p>
                        <ol>1. Statement of problems experienced by resident that are to be addressed. </ol>
                        <ol>2. Statement of objectives to be reached that address each problem. </ol>
                        <ol>3. Steps that will be taken by Ocean Valley Behavioral Health staff and/or resident to accomplish the identified objectives.</ol>
                        <ol>4. Target dates for accomplishing these steps and objectives.</ol>
                        <p>The treatment plan is based up the information given at intake, during bio-psych-social assessment, and ongoing through individual sessions with resident and family sessions. These plans are updated and amended every 30 days or as resident needs change, or objectives are met.</p>
                        <p>These treatment plans are created and kept in resident documentation program, which is a secure, web-based documentation system.</p>
                        <h3>12-Step Support Groups</h3>
                        <p>Ocean Valley Behavioral Health    is a 12-Step based facility that encourages residents attend daily meetings as part of the treatment protocol and recovery effort. Residents go to both A.A. & N.A with an occasional option to attend Al-anon (Codependents Anonymous) meetings when residents may benefit. </p>
                    </div>
                </Fade>
            </div> */}
            {/* <div id="treatmentFive">
                <Fade left>
                    <div id="treatmentFive-text">
                        <h3>Recreational Activities</h3>
                        <p>Ocean Valley Behavioral Health    promotes fun in sobriety. Residents learn how to develop interests and hobbies that do not include drugs or alcohol. Organized activities may include but are not limited to:</p>
                        <li>Movies</li>
                        <li>Horseback Riding</li>
                        <li>Walks</li>
                        <li>Bowling</li>
                        <li>Water activities (Weather permitting</li>
                        <li>Frisbee Golf</li>
                        <li>Miniature Golf</li>
                        <li>Laser Tag</li>
                        <li>Local Sports Events</li>
                        <li>Hiking</li>
                        <li>Sober Events (Picnics, BBQ's, Chili Cookoffs, etc.</li>
                    </div>
                </Fade>
                <Fade right>
                    <img src={playaTwo} atl="beach" />
                </Fade>
            </div> */}
            <div id="bottom-contact-container">
                <Fade left>
                    <form id="contact-form">
                        <p id="hp-contact-form-header">Reach Out</p>
                        <div id="form-slot-1">
                            <label htmlFor="name">Name</label>
                            <input type="text" defaultValue={name} name="name" />
                        </div>
                        <div id="form-slot-2">
                            <label htmlFor="email">Email</label>
                            <input type="email" defaultValue={email} name="email" />
                        </div>
                        <div id="form-slot-3">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" defaultValue={message} rows="10" cols="45" />
                        </div>
                        <button type="submit" className="contact-submit-btn">Submit</button>
                    </form>
                </Fade>
                <Fade right>
                    <div id="info-and-map">
                        <div id="google-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13268.063180590256!2d-117.82638843022458!3d33.7602577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdbcd13d3be81%3A0x3d8e1cca1625b0c7!2s13961%20Mauve%20Dr%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1667494799764!5m2!1sen!2sus" title="map" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Treatment;