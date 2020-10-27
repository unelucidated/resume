import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Contactmodal from './Dashboard/Contactmodal';
import logo from './charizard.png'

const Navbar = () => {
    const [modal, setModal] = useState(false);
    return (
        <nav className="navbar is-dark">
            <div className="navbar-brand">
                <Link to='/' className="navbar-item">
                    <img src={logo} alt="charizard"/>
                </Link>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start pl-6">
                    <Link className="navbar-item" to='/'>Home</Link>
                    <Link className="navbar-item" to='/about'>About</Link>
                    <Link className="navbar-item" to='/resume'>Resume</Link>
                    <Link className="navbar-item" to='/works'>Works</Link>
                    <Link className="navbar-item" to='/testimonials'>Testimonials</Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button onClick={() => setModal(true)} className="button is-dark is-light is-outlined is-inverted is-small">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
            <Contactmodal setModal={() => setModal(false)} active={modal}/>
        </nav>
    );
}

export default Navbar;