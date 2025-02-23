import "../assets/popular.css"
import room1 from "../assets/images/room1.jpg"
import room2 from "../assets/images/room2.jpg"
import room3 from "../assets/images/room3.jpg"

export default function Popular () {
    const popularRooms: {name: string, price: number, image: any}[] = [
        {name: "Single Special Room", price: 499, image: room1},
        {name: "Double Special Room", price: 659, image: room2},
        {name: "Premium Room", price: 899, image: room3},
    ]

    return <section id="Services" className="block popular-block">
        <h3>Most <b style={{color:"var(--cmain)"}}>Popular</b> Rooms</h3>
        <p>Discover our guests' favorite rooms, designed for comfort and style.</p>
        <ul className="popular-list">
            {popularRooms.map(el=>{
                return <div className="room-card" key={Math.random()}>
                    <img className="image" src={el.image}/>
                    <div className="bottom">
                        <h4>{el.name}</h4>
                        <p>$ {el.price} per night</p>
                    </div>
                </div>
            })}
        </ul>
    </section>
}