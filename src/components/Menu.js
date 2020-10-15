import React from 'react'
import PropTypes from 'prop-types'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
              <li><a onClick={props.onToggleMenu} href="https://datos.org.py/">Comenzar</a></li>
              <li><a onClick={props.onToggleMenu} href="https://datos.org.py/dataset">Datos</a></li>
              <li><a onClick={props.onToggleMenu} href="https://datos.org.py/sites/apps.html">Apps C&iacute;vicas</a></li>
              <li><a onClick={props.onToggleMenu} href="https://datos.org.py/organization">Organizaciones</a></li>
            </ul>
        </div>
        <button className="close" onClick={props.onToggleMenu} style={{boxShadow:'none'}}>
          Close
        </button>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
