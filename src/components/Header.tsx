import "../assets/header.css"
import main from "../assets/images/main.jpg"

export default function Header () {

    return <header className="header-block" id="Search">
        <h1>Explore Your <b style={{color: "var(--cmain)"}}>Desired Hotel</b> All Over The World</h1>
        <section className="search-div">
            <div className="input-container">
                <p>Location</p>
                <input autoComplete="address" placeholder="Type the place"/>
            </div>
            <div className="input-container">
                <p>Check In</p>
                <input type="date"/>
            </div>
            <div className="input-container">
                <p>Check Out</p>
                <input type="date"/>
            </div>
            <div className="input-container">
                <p>Person</p>
                <select>
                    {[1,2,3,4].map(el=>{
                        return <option key={Math.random()}>
                            {el}
                        </option>
                    })}
                </select>
            </div>
            <button>
            Search
            </button>
        </section>
        <img className="image-header" src={main}/>
    </header>
}