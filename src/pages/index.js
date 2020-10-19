import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="portal.datos.org.py"
                    meta={[
                        { name: 'description', content: 'Sitio de datos abiertos de la socidad civil del Paraguay' },
                        { name: 'keywords', content: 'datos, abiertos, Paraguay, open, data' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Accede a datos</h3>
                                <p>Podrás acceder a nuestros conjuntos de datos
                                de uso abierto para todos</p>
                            </header>
                            <a href="https://portal.datos.org.py/dataset" className="link primary"> </a>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Visualiza</h3>
                                <p>Descubre las formas con las que puedes
                                comprender los datos: gr&aacute;ficos, mapas
                                y m&aacute;s </p>
                            </header>
                            <a href="https://portal.datos.org.py/dataset" className="link primary"> </a>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Explora aplicaciones c&iacute;vicas</h3>
                                <p>Accede a las aplicaciones que utilizan datos
                                abiertos en Paraguay</p>
                            </header>
                            <a href="https://portal.datos.org.py/sites/apps.html" className="link primary"> </a>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Utiliza nuestra API</h3>
                                <p>Los desarrolladores de software pueden
                                utilizar nuestra API y crear c&oacute;digo que
                                interact&uacute;e con nuestro sitio y nuestros
                                datos</p>
                            </header>
                            <a href="https://docs.ckan.org/en/2.9/api/index.html" className="link primary"> </a>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Conoce organizaciones</h3>
                                <p>Averigua cu&aacute;les son las organizaciones
                                que forman parte de la Comunidad de Datos
                                 Abiertos del Paraguay</p>
                            </header>
                            <a href="https://portal.datos.org.py/organization" className="link primary"> </a>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Suscr&iacute;bete y publica datos</h3>
                                <p>Cualquier sector de la sociedad puede formar
                                parte suscribi&eacute;ndose y publicando
                                datos abiertos para todos</p>
                            </header>
                            <a href="https://portal.datos.org.py/#subscribe-section" className="link primary"> </a>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>¿Qué es el Portal de DatosPy?</h2>
                            </header>
                            <p>
                              El Portal de Datos Abiertos de la Sociedad Civil,
                              Academia y Sector Privado es un esfuerzo por abrir
                               y publicar datos que nos permitan analizar y
                               resolver los problemas que afectan a nuestra
                               sociedad.
                            </p>
                            <p>
                              Este portal acerca esos datos a la población y
                              proporciona un espacio para que sean alojados y
                              utilizados. Esta plataforma es mantenida por la
                              comunidad de Datos Abiertos de Paraguay.
                            </p>
                            <ul className="actions">
                                <li><a href="https://portal.datos.org.py/" className="button next">Comenzar</a></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
