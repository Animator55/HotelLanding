import { faHandHolding, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "../assets/beneficts.css"

export default function Beneficts() {
    const benefictsList: { title: string, description: string, icon: IconDefinition }[] = [
        { title: "Afinago", description: "Lofgniasgni angkafn fao n na ma sj fnskn skn sn ksmgsk gfne sd kgnsk.", icon: faHandHolding },
        { title: "Afinago", description: "Lofgniasgni angkafn fao n na ma sj fnskn skn sn ksmgsk gfne sd kgnsk.", icon: faHandHolding },
        { title: "Afinago", description: "Lofgniasgni angkafn fao n na ma sj fnskn skn sn ksmgsk gfne sd kgnsk.", icon: faHandHolding },
        { title: "Afinago", description: "Lofgniasgni angkafn fao n na ma sj fnskn skn sn ksmgsk gfne sd kgnsk.", icon: faHandHolding },
        { title: "Afinago", description: "Lofgniasgni angkafn fao n na ma sj fnskn skn sn ksmgsk gfne sd kgnsk.", icon: faHandHolding },
        { title: "Afinago", description: "Lofgniasgni angkafn fao n na ma sj fnskn skn sn ksmgsk gfne sd kgnsk.", icon: faHandHolding },
    ]

    return <section className="block beneficts-block" id="Beneficts">
        <h4>Beneficts that we provide</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem.</p>
        <div className="beneficts-grid">
            {benefictsList.map(el => {
                return <div key={Math.random()}>
                    <div className="icon">
                        <FontAwesomeIcon icon={el.icon} />
                    </div>

                    <h5>{el.title}</h5>
                    <p>{el.description}</p>
                </div>
            })}
        </div>
    </section>
}