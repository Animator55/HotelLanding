import "../assets/popular.css"

export default function Popular () {
    const popularRooms: {name: string, price: number, image: any}[] = [
        {name: "Single Special Room", price: 499, image: "red"},
        {name: "Double Special Room", price: 659, image: "blue"},
        {name: "Premium Room", price: 899, image: "green"},
    ]

    return <section id="Services" className="block popular-block">
        <h3>Most Popular Rooms</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At aliquid fugiat.</p>
        <ul className="popular-list">
            {popularRooms.map(el=>{
                return <div className="room-card" key={Math.random()}>
                    {/* <img/> */}
                    <div className="image" style={{backgroundColor: el.image}}></div>
                    <div className="bottom">
                        <h4>{el.name}</h4>
                        <p>$ {el.price} per night</p>
                    </div>
                </div>
            })}
        </ul>
    </section>
}