const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Datos Abiertos Paraguay",
    author: "Alejandro Servin, based on Forty by HTML5 UP",
    description: "Sitio de datos abiertos de la socidad civil del Paraguay"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/newimages/datos_abiertos_py_fondo_claro_vertical.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newimages`,
        path: `${__dirname}/src/assets/newimages`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
