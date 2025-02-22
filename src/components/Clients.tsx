import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function Clients () {
    const [carrouselIndex, setIndex ]= React.useState(0)

    const clientsList: {image: any, quote: string, name: string, description: string}[] = [
        {image: "red", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid et incidunt libero magni! Fugit officiis sapiente nesciunt sint dolorem, laudantium unde, necessitatibus architecto repellat sit vitae odit eum reiciendis.", name:"Ifdhisnf ianfam", description: "Drevl CEO"},
        {image: "red", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid et incidunt libero magni! Fugit officiis sapiente nesciunt sint dolorem, laudantium unde, necessitatibus architecto repellat sit vitae odit eum reiciendis.", name:"Ifdhisnf ianfam", description: "Drevl CEO"},
        {image: "red", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid et incidunt libero magni! Fugit officiis sapiente nesciunt sint dolorem, laudantium unde, necessitatibus architecto repellat sit vitae odit eum reiciendis.", name:"Ifdhisnf ianfam", description: "Drevl CEO"},
        {image: "red", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid et incidunt libero magni! Fugit officiis sapiente nesciunt sint dolorem, laudantium unde, necessitatibus architecto repellat sit vitae odit eum reiciendis.", name:"Ifdhisnf ianfam", description: "Drevl CEO"},
        {image: "red", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid et incidunt libero magni! Fugit officiis sapiente nesciunt sint dolorem, laudantium unde, necessitatibus architecto repellat sit vitae odit eum reiciendis.", name:"Ifdhisnf ianfam", description: "Drevl CEO"},
        {image: "red", quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid et incidunt libero magni! Fugit officiis sapiente nesciunt sint dolorem, laudantium unde, necessitatibus architecto repellat sit vitae odit eum reiciendis.", name:"Ifdhisnf ianfam", description: "Drevl CEO"},
    ]
    const QuoteItem = ({index}: {index: number})=>{
        const quoteData = clientsList[index]
        return <div>
            {/* <img/> */}
            <div style={{background: quoteData.image}}></div>
            <p>{quoteData.quote}</p>
            <h6>{quoteData.name}</h6>
            <p>{quoteData.description}</p>
        </div>
    }
    const prevIndex =carrouselIndex -1 === -1 ? (clientsList.length -1) : carrouselIndex
    const nexIndex =carrouselIndex +1 === clientsList.length ? 0 : carrouselIndex

    return <section>
        <h4>What our Clients say</h4>
        <div>
            <button onClick={()=>{setIndex(carrouselIndex-1)}}>
                <FontAwesomeIcon icon={faCaretLeft}/>
            </button>
            <QuoteItem index={prevIndex}/>
            <QuoteItem index={carrouselIndex}/>
            <QuoteItem index={nexIndex}/>
            <button onClick={()=>{setIndex(carrouselIndex+1)}}>
                <FontAwesomeIcon icon={faCaretRight}/>
            </button>
        </div>
    </section>
}