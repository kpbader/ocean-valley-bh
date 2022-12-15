import "./treatment.css";
import Fade from 'react-reveal/Fade';
import moonlightOne from "../../assets/images/xpanda.webp";
import veniceCanal from "../../assets/images/roberto-nickson-b650UcXvYUk-unsplash.webp";
import BottomContact from '../Bottom-Contact/bottom-contact';

function Treatment() {

    return (
        <section id="treatment-page">

            <div id="treatment-top">
                <Fade up>
                    <h1>Treatment Planning for Long-Lasting Recovery</h1>
                    <p>We work with you to create a personalized treatment plan based on the information you share with us at intake, during your bio-psych-social assessment, and through ongoing individual sessions and family sessions where we help you identify a few key factors about your situation:</p>

                    <li>Statement of problems to be addressed</li>
                    <li>Set forth objectives to address each problem</li>
                    <li>Steps for us to take to accomplish these objectives together</li>
                    <li>Set forth desired target dates to execute these goals</li>

                </Fade>
            </div>
            <div id="treatmentTwo">
                <Fade left>
                    <img src={moonlightOne} alt="moonlight landscape"/>
                </Fade>
                <Fade right>
                    <div id="treatmentTwo-text">
                        <h2>Get Treatment That's Right For You</h2>
                        <p>With a higher level of resident support and accountability, our resident-centered approach advances the healing of <strong>you</strong>. Once you complete detoxification, your treatment starts with a minimum 25 hours of clinical treatment per week.</p>

                        <h2>Address Your Emotions</h2>
                        <p>Weekly group sessions focused on increasing self-esteem. Stay ready for whatever life throws at you and explore how your thoughts, experiences, and behavior affect your emotions.</p>

                        <h2>Prevent Relapse</h2>
                        <p>Ability to recognize the signs and symptoms of relapse is the key to relapse prevention. We help you identify and learn about alternate behavioral patterns to help you avoid situations that could trigger a relapse.</p>

                        <h2>Strengthen Family Dynamics</h2>
                        <p>Recovery is also a chance for you and your loved ones to process how addiction affects everyone in a support system. At Ocean Valley, family members and others in your support system are encouraged to participate in group and individual counseling.</p>

                        <h2>Monitor Your Progress</h2>
                        <p>We store extensive records of your individual treatment plan in a secure digital archive, which gets updated every 30 days, or as you meet your objectives or your needs change.</p>

                        <h2>Incidental Medical Services (IMS)</h2>
                        <p>We offer Access to Incidental Medical Services to address medical issues associated with detoxification and the provision of addiction treatment while you focus on long-term recovery.</p>
                        <p>*Ocean Valley IMS does not include the provision of general primary medical care.</p>
                    </div>
                </Fade>
            </div>
            <div id="treatmentThree">
                <Fade left>
                    <div id="treatmentThree-text">
                        <h2>12-Step Group Support</h2>
                        <p>Commence your healing at our premier recovery facility, with a treatment protocol rooted in a 12-step approach that encourages you to attend dally AA and NA meetings, including options to attend additional Al-Anon (Co-Dependents Anonymous) meetings for those who may benefit.</p>

                        <h2>Individual Counseling and Therapy Sessions</h2>
                        <p>Every week, you will meet with your own primary certified drug and alcohol treatment counselor, as well as a prmary therapist.</p>
                        <p>*All individual therapy and counseling sessions are done with a certified drug/alcohol treatment counselor and full-licensed MFT/LCSW or similar.</p>

                        <h2>Daily Discussion</h2>
                        <p>Join an open and interactive discussion of "Topic of the Day" where you can speak your mind and provide feedback to your peers.</p>

                        <h2>Weekly Group Discussion</h2>
                        <p>Along with Topic Discussion, weekly group is a chance to share your thoughts and deliver feedback to others in a safe, communal, and interactive setting each week.</p>

                        <h2>Learn About Chemical Dependency</h2>
                        <p>Join in group discussion on a range of topics, including chemical dependency, cross-addiction, 12-step support groups, and more, so you can begin to develop better habits and improve dysfunctional patterns in your life.</p>

                        <h2>Individual Journaling</h2>
                        <p>Putting your thoughts down on paper can help you gain insights into your emotions, thoughts, and feelings. Also utilized in individual sessions with your therapist and counselor to help identify and process your feelings.</p>

                    </div>
                </Fade>
                <Fade right>
                    <img src={veniceCanal} alt="Venice Canals" />
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default Treatment;