import "./Services.css";
import Box1 from "../../Assets/grid1.jpg"
import Box2 from "../../Assets/grid2.jpg"
import Box3 from "../../Assets/grid3.jpg"

function Services () {
    return (
        <div className = "services">
            <div className="services__gallery">
                <div className="services__picture services__picture--wide">
                    <h3 className="services__title services__title--wide">Asesoria Presencial</h3>
                    <img className="services__img services__img--wide" src={Box1} alt="Asesoria Presencial"/>
                </div>
                <div className="services__picture services__picture--narrow">
                    <h3 className="services__title services__title--narrow">Asesoria Online</h3>
                    <img className="services__img services__img--narrow" src={Box2} alt="Asesoria Online"/>
                </div>
                <div className="services__picture services__picture--narrow">
                    <h3 className="services__title services__title--narrow">Estudio Colorimetría</h3>
                    <img className="services__img services__img--narrow" src={Box3} alt="Estudio Colorimetría"/>
                </div>
            </div>
        </div>
    )
}

export default Services