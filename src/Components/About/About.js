import "./About.css";
import Luxury from "../../Assets/luxury.jpg";
import Athenia from "../../Assets/athenia.jpg";

function About () {
    return (
        <div className="about">
            <h2 className="about__title">Acerca de mi</h2>
            <div className="about__pictures">
                <img className="about__img"src={Luxury} alt="Luxury" height="100px" width="400px" />
                <img className="about__img" src={Athenia} alt="Athenia" height="100px" width="400px" />
            </div>
            <div className="about__text">
                <h3 className="about__subtitle">Brigadeiro</h3>
                <p className="about__description">ipsum uashfiusha saufhasiu  ijhnfqiujas iuuwqfdu jsnfjsan jqwnf jqhwisoia jsajifnsaiuj nsi ujnfasis ijnsa ijsfsjaifijsafhjsaoi isajfnas ijasnfsa  ijasnfsaifsanfn isjfnsafhjn hjfnsa hjfnsnf hssh h shs hsshwyu jsajfsafhb jsfnaskfjyuw</p>
                <h4 className="about__slogan">acompa;ame a ver mis servicios</h4>
            </div>
        </div>
    )
}

export default About