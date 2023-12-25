import React from 'react';
import './Navbar.css';
import searchIcon from '../../assets/icons8-search.svg';
import logo from '../../assets/308627531_462330719255171_5928019227771909430_n.jpg';

const Navbar = () => {
    const folders = ['Home'];

  return (
    <>
        <div className='nav_container'>
            <div className="navbar">
                <div className="nav_left">
                    <div className="nav_logo">
                        <img src={logo} alt="LOGO" />
                    </div>
                </div>
                <div className="nav_mid">
                    <div className="nav_mid_content">
                        {folders.map((folder,index)=>{
                            return <li key={index}>{folder}</li>
                        })}
                    </div>
                </div>
                <div className="nav_right">
                    <div className="nav_search">
                        <input type="text" placeholder='search'/>
                        {/* <button>
                            <img src={searchIcon} alt="search" />
                        </button> */}
                        <img src={searchIcon} alt="search" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar