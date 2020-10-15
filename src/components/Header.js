import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import logo from '../assets/newimages/datos_abiertos_py_para_fondo_oscuro.png'


const Header = (props) => (

    <header id="header" className="alt">

        <Link to="/" className="logo"><img src={logo} alt="logo" height="44px" /></Link>
        <nav>
            <button className="menu-link" onClick={props.onToggleMenu}
              style={{boxShadow:'none'}} >
              Men&uacute;
            </button>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
