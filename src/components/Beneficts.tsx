import { faCar, faConciergeBell, faCreditCard, faDumbbell, faHandHolding, faUtensils, faWifi, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "../assets/beneficts.css"

export default function Beneficts() {
    const benefictsList: { title: string, description: string, icon: IconDefinition }[] =  [
        { title: "Free WiFi", description: "Enjoy high-speed internet access in all rooms and common areas.", icon: faWifi },
        { title: "Parking", description: "Private and secure parking available for guests, with 24/7 surveillance.", icon: faCar },
        { title: "24/7 Service", description: "Our front desk is open at all times to assist with any requests or inquiries.", icon: faConciergeBell },
        { title: "Gym Access", description: "Stay active with our fully equipped fitness center, open daily for guests.", icon: faDumbbell },
        { title: "Restaurant", description: "Taste a variety of delicious meals prepared fresh daily by our chefs.", icon: faUtensils },
        { title: "Flexible Payment", description: "We accept multiple payment options, including credit cards and digital wallets.", icon: faCreditCard }
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