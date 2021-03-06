/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "React Portfolio Template",
    author:"Mohammad Inamullah",
    description:
      "A simple portfolio template designed in React.",
    url: "https://mdi-react-portfolio.netlify.app", // No trailing slash allowed!
    image: "./src/images/portfolio.png", // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Montserrat\:400,500,600,700,800,900` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-plugin-smoothscroll`
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
          // set the color you want for your progress bar here
          color: '#663391',
          // set the height of the scroll indicator
          height: '3px',
          // Set specific paths where you want the scroll indicator using regex
          paths: ['/'],
          // Configure the z-index of the indicator element
          zIndex: `9999`,
      },
  },
  ]
}
