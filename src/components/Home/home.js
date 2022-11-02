import "./home.css";
import splashVid from "../../assets/video/jt-footage.mp4";

function Home() {
    return (
        <section id="home-page">
            <video autoPlay muted loop>
                <source src={splashVid} type="video/mp4"/>
            </video>

        </section>
    )
};

export default Home;