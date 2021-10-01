import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import * as FabIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';

function Menubar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <nav>
            <div className="menu-bar">
                <NavLink to='#' className='menu-sidebar'>
                    <FabIcons.FaBars onClick={showSidebar}/>
                </NavLink>
                <nav className={sidebar? "nav-menu active":"nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>     
                    <li className="navbar-toggle">
                        <NavLink to='#' className='menu-crossbar'>
                            <AiIcons.AiOutlineClose/>
                        </NavLink></li>
                        {SidebarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <NavLink to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}   
                </ul>
                </nav>
                <NavLink to='/all'><h3 className="all">All</h3></NavLink>
                <NavLink to='/mensClothing'><h3 className="mob">Men's Clothing</h3></NavLink>
                <NavLink to='/WomensClothing'><h3 className="fash">Women's Clothing</h3></NavLink>
                <NavLink to='/electronics'><h3 className="elec">Electronics</h3></NavLink>
                <NavLink to='/jewelery'><h3 className="hodec">Jewelery</h3></NavLink>
                {/* <NavLink to='/computers'><h3 className="comp">Computers</h3></NavLink>  */}
            </div>
        </nav>
    )
}

export default Menubar
