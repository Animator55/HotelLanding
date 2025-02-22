import { faMapMarker, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer () {
    return <footer id="Contact">
        <section>

            <div>
                <h3>Logo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Magni itaque dolore nemo, illum id optio tempore velit totam.</p>
                <div>
                </div>
            </div>
            <div>
                <h2>About</h2>
                <p>Home</p>
                <p>Terms</p>
                <p>Privacy & Policy</p>
                <p>Finance</p>
            </div>
            <div>
                <h2>Support</h2>
                <p>Support</p>
                <p>Service</p>
                <p>Blog</p>
                <p>Customer</p>
            </div>
            <div>
                <h2>Contact Us</h2>
                <p>
                    <FontAwesomeIcon icon={faMapMarker}/>
                    Random, Ubication, Some Country
                </p>
                <p>
                    <FontAwesomeIcon icon={faPhone}/>
                    +1 67 482 483
                </p>
            </div>
        </section>
        <p>All Rights Reserved by Nahuel Ibarra</p>
    </footer>
}