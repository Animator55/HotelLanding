import "../assets/navbar.css"

export default function NavBar () {
    const points = [
        "Search",
        "Beneficts",
        "Process",
        "Services",
        "Clients",
        "Contact",
    ]

    return <nav className="nav-bar">
        <h3>Logo</h3>
        
        <ul className="navigation-list">
            {points.map(id=>{
                return <a key={Math.random()} href={"#"+id}>{id}</a>
            })}
        </ul>
        <button className="sign-in">Sign Up</button>
    </nav>
}