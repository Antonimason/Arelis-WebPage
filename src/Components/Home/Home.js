import "./Home.css"
import imagenHome from "../../Assets/home.jpg"
import Acce from "../../Assets/acce.jpg"

function Home() {
    return (
        <div className="home">
            <div className="home__text">
                <h1 className="home__title">Arelis Guevara</h1>
                <p className="home__subtitle">Asesoría de imagen personal y coach</p>
                <div className="home__imgText"><img src={Acce} alt="modelo 2" className="home__picturetext"/></div>
            </div>
            <div className="home__img"><img src={imagenHome} alt="modelo 1" className="home__picture"/></div>
        </div>
    )
}

export default Home;