import { faHandHolding, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
            <div className="image-process"></div>
            <div className="image-process"></div>
            <div className="image-process"></div>
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