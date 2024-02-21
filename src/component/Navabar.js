import React, { useState } from 'react'
import "./navbar.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHome,faImages,faEnvelope,faInfoCircle,faBars} from "@fortawesome/free-solid-svg-icons"
const Navabar = () => {
   const [open,setOpen]=useState(false);
   const toggle = ()=>{
      setOpen(!open);
   }
  return (
    
      <nav className={`navbar ${open?"responsive":""}`}>
        
         <a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a>
            <a href="#gallery"><FontAwesomeIcon icon={faImages} /> Gallery</a>
            <a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a>
            <a href="#about"><FontAwesomeIcon icon={faInfoCircle} /> About</a>
            <a href="javascript:void(0);" className="icon" onClick={toggle}>
                <FontAwesomeIcon icon={faBars} />
            </a>
      </nav>
    
  )
}

export default Navabar
