import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
                <li><a href="https://twitter.com/datospy" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/DatosPy" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                <li><a href="https://github.com/datospy" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
            </ul>
            <ul className="copyright">
                <li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
                <li style={{color: 'white'}}> Las im&aacute;genes de lugares del Paraguay provienen de &nbsp;
                    <a href="https://www.instagram.com/fotociclo/">FOTOCICLO</a>
                 </li>
            </ul>
        </div>
    </footer>
)

export default Footer
