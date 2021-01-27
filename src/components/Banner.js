import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import bg1 from '../assets/images/bg1.jpg'
import bg2 from '../assets/images/bg2.jpg'
import bg3 from '../assets/images/bg3.jpg'
import bg4 from '../assets/images/bg4.jpg'
import bg5 from '../assets/images/bg5.jpg'

const Banner = (props) => (
  <>
    <div className="carousel-container">
      <div className="inner"
        style={{
          position: 'absolute',
          zIndex: 1,
          right: 0,
          left: 0,
          padding: '8em 0 0 0',
        }}
      >
        <header className="major" style={{ width: '100%' }}>
            <h1>Portal de datos abiertos de la sociedad civil</h1>
        </header>
        <div className="content">
            <p>El Portal es un esfuerzo por abrir y publicar datos que nos
            permitan analizar y resolver los problemas que afectan a nuestra
             sociedad.</p>

            <ul className="actions">
                <li><a href="#one" className="button next scrolly">Ver m&aacute;s</a></li>
            </ul>
        </div>
      </div>
      <Carousel controls={false} interval={8000}>
        <Carousel.Item>
          <div className="item"
            style={{
              background: `url(${bg1}) no-repeat center center `,
              backgroundSize: 'cover',
            }}
          >
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item"
            style={{
              background: `url(${bg2}) no-repeat center center `,
              backgroundSize: 'cover'
            }}
          >
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item"
            style={{
              background: `url(${bg3}) no-repeat center center `,
              backgroundSize: 'cover'
            }}
          >
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item"
            style={{
              background: `url(${bg4}) no-repeat center center `,
              backgroundSize: 'cover'
            }}
          >
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item"
            style={{
              background: `url(${bg5}) no-repeat center center `,
              backgroundSize: 'cover'
            }}
          >
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
)

export default Banner
