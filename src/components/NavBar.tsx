import "../assets/navbar.css"

export default function NavBar () {
    const points = [
        "Top",
        "Process",
        "Benefics",
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
        <button>Sign Up</button>
    </nav>
}