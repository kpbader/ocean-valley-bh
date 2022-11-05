import "./treatment.css";
import Fade from 'react-reveal/Fade';
import moonlightOne from "../../assets/images/xpanda.jpg";
import veniceCanal from "../../assets/images/roberto-nickson-b650UcXvYUk-unsplash.jpg";
import sunsetRoad from "../../assets/images/sunset-road.jpg";
import playa from "../../assets/images/playa.jpeg";
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
                    <h2>Treatment</h2>
                    <p>Ocean Valley Behavioral Health  Residential Treatment Program consists of a minimum of 25 hours per week of clinical treatment hours. This is designed with a "resident-centered approach" that promotes both a higher level of resident support, as well as a higher level of accountability. This phase of treatment typically follows detoxification. All group therapy sessions are facilitated by licensed/certified treatment professionals. Some groups maybe co-facilitated by a registered intern under the supervision of licensed/certified professional. </p>
                </Fade>
            </div>
            <div id="treatmentTwo">
                <Fade left>
                    <img src={moonlightOne} alt="moonlight landscape" />
                </Fade>
                <Fade right>
                    <div id="treatmentTwo-text">
                        <h3>Incidental Medical Services (IMS)</h3>
                        <p>Incidental Medical Services (IMS) are services provided at Ocean Valley Behavioral Health    address medical issues associated with either detoxification or the provision of addiction treatment services to assist in the enhancement those treatment services. IMS does not include the provision of general primary medical care.  All IMS delivered at Ocean Valley Behavioral Health    are related to the residents’ process of moving into long-term recovery. See IMS Policy and Procedure for specific details about this service. </p>
                        <h3>Chemical Dependency Education Group</h3>
                        <p>In this group, a variety of topics are discussed on a rotating basis.  Residents are educated in the areas of the disease model of chemical dependency, cross addiction, introduction to 12-step support groups and other informative subjects to help the resident develop and improve their dysfunctional living patterns. </p>
                        <h3>Relapse Prevention</h3>
                        <p>Information is presented regarding signs and symptoms of relapse. The residents are encouraged to identify and share possible alternative behaviors and how to avoid situations which may trigger relapse. </p>
                        <h3>Emotions Management</h3>
                        <p>A weekly group that targets self-esteem, anger management, emotional control, motivations, human behavior and how thoughts, experiences, and actions affect our own emotions. </p>
                        <h3>Individual Journal Writing</h3>
                        <p>Residents are encouraged to write about individual situations to help them identify thoughts and feelings.  This identification will assist them in gaining new insights. Residents will also utilize this in individual sessions to process with therapist and counselor. </p>
                    </div>
                </Fade>
            </div>
            <div id="treatmentThree">
                <Fade left>
                    <div id="treatmentThree-text">
                        <h3>Process Group</h3>
                        <p>This group meets weekly, in conjunction with Topic Discussion.  The approach is interactive, and members are encouraged to talk about the problems they have and give feedback to others. The group emphasizes interpersonal relationships and the sharing of feelings. </p>
                        <h3>Topic Discussion</h3>
                        <p>This group is an open and interactive format that allows residents to share on a topic for the day and provide feedback to peers when appropriate. </p>
                        <h3>Individual Counseling and Therapy Sessions</h3>
                        <p>All individual therapy sessions are done with a fully licensed MFT/LCSW or similar background. All counseling sessions are done with a certified drug/alcohol treatment counselor. Residents participate in a minimum of 2 hours of individual counseling/therapy per week. Each resident will have a primary counselor that is a certified drug and alcohol treatment counselor with whom resident will meet with for 1 hour a week. Additionally, each resident will have a primary therapist with whom they will meet with for 1 hour a week. </p>
                        <h3>Family Dynamics</h3>
                        <p>Family members and/or other significant persons in each resident’s primary support system are encouraged to participate in group process and individual counseling session. This is where healing commences as the family and resident process feelings surrounding the affect addiction has had on the entire support system.</p>
                    </div>
                </Fade>
                <Fade right>
                    <img src={veniceCanal} alt="Venice Canals" />
                </Fade>
            </div>
            <div id="treatmentFour">
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
            </div>
            <div id="treatmentFive">
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
            </div>
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