import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import "../assets/clients.css"

export default function Clients() {
    const [carrouselIndex, setIndex] = React.useState(0)

    const clientsList: { image: any, quote: string, name: string, description: string }[] = [
        {
            image: "red",
            quote: "The service was absolutely impeccable. I felt like royalty from the moment I stepped in.",
            name: "Emily Carter",
            description: "Frequent traveler, New York"
        },
        {
            image: "blue",
            quote: "A truly relaxing stay! The rooms were spotless, and the ocean view was breathtaking.",
            name: "James Holden",
            description: "Business consultant, London"
        },
        {
            image: "green",
            quote: "The staff went above and beyond to make our honeymoon unforgettable. We'll be back for sure!",
            name: "Sophia Martinez",
            description: "Newlywed, Madrid"
        },
        {
            image: "orange",
            quote: "I travel a lot for work, and this hotel stands out for its comfort and efficiency. Highly recommended!",
            name: "Daniel Thompson",
            description: "Tech entrepreneur, San Francisco"
        },
        {
            image: "yellow",
            quote: "Best sleep I've had in months! The bed was so comfortable, and the atmosphere was so peaceful.",
            name: "Laura Chen",
            description: "Writer, Melbourne"
        },
        {
            image: "lime",
            quote: "The breakfast buffet was divine. Fresh ingredients, amazing variety, and great coffee!",
            name: "Marco Rossi",
            description: "Food critic, Rome"
        },
        {
            image: "pink",
            quote: "I've stayed in many luxury hotels, but this one felt like home. The warmth of the staff made all the difference.",
            name: "Isabelle Dupont",
            description: "Fashion designer, Paris"
        },
        {
            image: "black",
            quote: "Location is perfect, right in the heart of the city. Walkable distance to all major attractions.",
            name: "Samuel Kim",
            description: "Tourist, Seoul"
        },
        {
            image: "gray",
            quote: "An absolute gem! The spa services were top-notch, and I left feeling completely rejuvenated.",
            name: "Olivia White",
            description: "Wellness coach, Toronto"
        },
        {
            image: "cyan",
            quote: "I felt incredibly safe and well taken care of throughout my stay. Perfect for solo travelers!",
            name: "Ethan Walker",
            description: "Solo adventurer, Cape Town"
        }
    ];

    const QuoteItem = ({ index }: { index: number }) => {
        const quoteData = clientsList[index]
        return <div className="quote-item">
            {/* <img/> */}
            <div style={{ background: quoteData.image }}></div>
            <div className="quote-content">
                <p>{quoteData.quote}</p>
                <h6>{quoteData.name}</h6>
                <p className="title">{quoteData.description}</p>
            </div>
        </div>
    }
    const prevIndex = carrouselIndex - 1 === -1 ? (clientsList.length - 1) : (carrouselIndex - 1)
    const nexIndex = carrouselIndex + 1 === clientsList.length ? 0 : (carrouselIndex + 1)

    const move = (index: number, toLeft: boolean)=>{
        let carrousel = document.querySelector(".carrousel") as HTMLDivElement
        if(carrousel) carrousel.classList.add(toLeft ? "rotate-toLeft": "rotate-toRight")
            setTimeout(()=>{
                setIndex(index)
                if(carrousel) carrousel.classList.remove(toLeft ? "rotate-toLeft": "rotate-toRight")
        }, 300)
    }

    return <section className="block" id="Clients">
        <h4>What our Clients say</h4>
        <div className="carrousel">
            <button onClick={() => { move(prevIndex, true) }}>
                <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <QuoteItem index={prevIndex} />
            <QuoteItem index={carrouselIndex} />
            <QuoteItem index={nexIndex} />
            <button onClick={() => { move(nexIndex, false) }}>
                <FontAwesomeIcon icon={faCaretRight} />
            </button>
        </div>
    </section>
}