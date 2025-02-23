import { faHandHolding, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import img1 from "../assets/images/outside.jpg"
import img2 from "../assets/images/hall.jpg"
import img3 from "../assets/images/resto.jpg"
import "../assets/process.css"

export default function Process() {
    const processList: { title: string, description: string, icon: IconDefinition }[] = [
        { title: "Afinago", description: "Lofgniasgniangkafn kanfknsagnak e kagksdngk sg sj fnskn skn sn ksmgskgfnesdkgnsk.", icon: faHandHolding },
        { title: "Afinago", description: "Lofgniasgniangkafn kanfknsagnak e kagksdngk sg sj fnskn skn sn ksmgskgfnesdkgnsk.", icon: faHandHolding },
        { title: "Afinago", description: "Lofgniasgniangkafn kanfknsagnak e kagksdngk sg sj fnskn skn sn ksmgskgfnesdkgnsk.", icon: faHandHolding },
        { title: "Afinago", description: "Lofgniasgniangkafn kanfknsagnak e kagksdngk sg sj fnskn skn sn ksmgskgfnesdkgnsk.", icon: faHandHolding },
    ]

    return <section className="process-block" id="Process">
        <div>
            <img className="image-process" src={img1}></img>
            <img className="image-process" src={img2}></img>
            <img className="image-process" src={img3}></img>
        </div>
        <div>
            <h4>The Process how we work</h4>
            <ul className="process-list">
                {processList.map(el => {
                    return <li key={Math.random()}>
                        <div className="icon">
                            <FontAwesomeIcon icon={el.icon} />
                        </div>
                        <div>
                            <h5>{el.title}</h5>
                            <p>{el.description}</p>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </section>
}