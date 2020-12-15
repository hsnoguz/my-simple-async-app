import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {SidebarData} from './SidebarData'
import './Navbar.css'
function Navbar() {
    const [sidebar,setSideBar]=useState(false)
const showSideBar=()=> setSideBar(!sidebar)
    return (
        <>
         <div className="navbar">
         <Link to="#" className="menu-bars">
             <FaIcons.FaBars onClick={showSideBar}></FaIcons.FaBars>
             </Link>    
          </div>  
          <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSideBar}>
            <li className="navbar-toggle"  >
                <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>    
                </Link>                
            </li>
          {
              console.log (SidebarData)
          }
            { 
            
                SidebarData.map((item,index)=>{
                    return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span> {item.title}</span>
                        </Link>
                        </li>
                    )
                }
                )
            }
          </ul>
          </nav>
        </>
    )
}

export default Navbar
