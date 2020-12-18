import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {SidebarData} from './SidebarData'
import './Navbar.css'
function Navbar(props) {
    const {parentsideBar,changeSidebar}=props;
    
    const [sidebar,setSideBar]=useState(false)

const showSideBar=()=> setSideBar(!sidebar)
    return (
        
    <>
         <div className="navbar">
         <Link to="#" className="menu-bars">
             <FaIcons.FaBars onClick={changeSidebar}></FaIcons.FaBars>
             </Link>    
          </div>  
          <nav className={parentsideBar ? 'nav-menu active':'nav-menu'}>
          <ul className='nav-menu-items' onClick={changeSidebar}>
            <li className="navbar-toggle"  >
                <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose></AiIcons.AiOutlineClose>    
                </Link>                
            </li>
          
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
