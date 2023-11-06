import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosSunny } from "react-icons/io";
import {Link} from "react-router-dom"

const Header = (props) => {
  return (
    <header>
      <div className="page_width">
        <div className="nav_header">
          <div className="logo"><img src={props.logo} alt="" /></div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/single-post">Single Post</Link></li>
              <li><Link to="/pages">Pages</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
           </nav>
          <div className="nav_right_part">
            <div className="nav_search">
              <input type="text" placeholder="search" />
              <AiOutlineSearch/>
            </div>
            <div className="nav_mode">
              <div className="nav_mode_button"><IoIosSunny/></div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
