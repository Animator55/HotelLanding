import "../assets/header.css"
import main from "../assets/images/main.jpg"

export default function Header () {

    return <header className="header-block" id="Book Now">
        <h1>Explore Your Desired Hotel All Over The World</h1>
        <section className="search-div">
            <div className="input-container">
                <p>Search</p>
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
                Book Now
            </button>
        </section>
        <img className="image-header" src={main}/>
    </header>
}