import "./Services.css";
import Box1 from "../../Assets/grid1.jpg"
import Box2 from "../../Assets/grid2.jpg"
import Box3 from "../../Assets/grid3.jpg"

function Services () {
    return (
        <div className = "services">
            <div className="services__gallery">
                <div className="services__box services__box--wide">
                    <h3 className="services__title">Asesoria Presencial</h3>
                    <img className="services__img" src={Box1} alt="Asesoria Presencial" width="480px" height="480px"/>
                </div>
                <div className="services__box">
                    <h3 className="services__title">Asesoria Online</h3>
                    <img className="services__img" src={Box2} alt="Asesoria Online" width="480px" height="480px"/>
                </div>
                <div className="services__box">
                    <h3 className="services__title">Estudio Colorimetría</h3>
                    <img className="services__img" src={Box3} alt="Estudio Colorimetría" width="480px" height="480px"/>
                </div>
            </div>
        </div>
    )
}

export default Services