import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import pic01 from '../assets/images/pic01.jpg'
import logo from '../assets/newimages/datos_abiertos_py_para_fondo_oscuro.png'


const Header = (props) => (

    <header id="header" className="alt">

        {/*<Link to="/" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></Link>*/}
        <Link to="/" className="logo"><img src={logo} height="44px" /></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Men&uacute;</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
