import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import { MdContactPage } from 'react-icons/md'
import { AiOutlineCustomerService } from 'react-icons/ai'
import { FcAbout } from 'react-icons/fc'
import { FcHome } from 'react-icons/fc'
import { BiLogIn } from 'react-icons/bi'
import '../CSS/Navbar.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
// import { RiHtml5Line } from "react-icons/ri";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])


    return (
        <div className="Navbar" id="Navbar">
            <Link to='Home' className="nav-logo" style={{color:"white"}}><span >Wgrow</span></Link>
            <div className={`nav-items ${isOpen && "open"}`}>
                <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>Home <i><FcHome /></i> </NavLink>
                <Link to="About" onClick={() => setIsOpen(!isOpen)}>About <i><FcAbout /></i></Link>
                <Link to="Service" onClick={() => setIsOpen(!isOpen)}>Service <i><AiOutlineCustomerService /></i></Link>
                <Link to="Contact" onClick={() => setIsOpen(!isOpen)}>Contact <i><MdContactPage /></i></Link>
                {/* <NavLink to="/Resume" onClick={() => setIsOpen(!isOpen)}>Resume<i><BiLogIn /></i></NavLink> */}
                <NavLink to="/Addcourse" onClick={() => setIsOpen(!isOpen)}>Add Course<i><BiLogIn /></i></NavLink>
                <NavLink to="/SimpleUser" onClick={() => setIsOpen(!isOpen)}>Sign Up<i><BiLogIn /></i></NavLink>
                <NavLink to="/Notification" onClick={() => setIsOpen(!isOpen)}>
                    Notification<Badge badgeContent={4} color="primary">
                        <MailIcon color="action" />
                    </Badge>
                </NavLink>
                <NavLink to="/ProfileUser" onClick={() => setIsOpen(!isOpen)}><b style={{height:"10px",width:"10px",borderRadius:"50%",backgroundColor:"orangered",padding:"7px"}}>NA</b></NavLink>
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
            </div>
        </div>
    );
};
export default Navbar;