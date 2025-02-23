import { faBed, faCheckCircle, faFileAlt, faHandHolding, faSearch, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import img1 from "../assets/images/outside.jpg"
import img2 from "../assets/images/hall.jpg"
import img3 from "../assets/images/resto.jpg"
import "../assets/process.css"

export default function Process() {
    const processList: { title: string, description: string, icon: IconDefinition }[] = [
        { title: "Search Room", description: "Enter your destination, dates, and preferences to find the perfect stay.", icon: faSearch },
        { title: "Select & Customize", description: "Choose your preferred room type and add any special requests or extras.", icon: faBed },
        { title: "Enter Details", description: "Fill in your personal information and payment details securely.", icon: faFileAlt },
        { title: "Confirm & Enjoy", description: "Review your booking, confirm, and get ready for a great stay!", icon: faCheckCircle }
      ]

    return <section className="process-block" id="Process">
        <div>
            <div className="image-process">
                <img src={img1}></img>
            </div>
            <div className="image-process">
                <img src={img2}></img>
            </div>
            <div className="image-process" >
                <img src={img3} ></img>
            </div>
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