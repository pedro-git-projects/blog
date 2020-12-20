module.exports = {
  siteMetadata:{
    title: 'Pedro Martins Software Engineering',
    author: 'Pedro Martins'
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ],
}
