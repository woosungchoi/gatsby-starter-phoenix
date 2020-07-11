require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Woosung blog.`,
    description: `Gatsby phoenix ??? ?? ??????. ?????, ??? ?? ?????.`,
    siteUrl: process.env.SITE_URL || `http://localhost`,
    startUrl: `/`,
    copyright: `© YYYY Woosung blog. All rights reserved.`,
    icon: `src/images/icon.png`,
    color: `#3C64F1`,
    menuLinks: [
      {
        name: `Home`,
        link: `/`,
      },
      {
        name: `Blog`,
        link: `/blog`,
      },
    ],
    socialLinks: [
      {
        name: `Twitter`,
        url: `https://twitter.com`,
        icon: `twitter`,
      },
      {
        name: `Github`,
        url: `https://github.com/woosungchoi`,
        icon: `github`,
      },
      {
        name: `Youtube`,
        url: `https://youtube.com`,
        icon: `youtube`,
      },
    ],
  },
  plugins: [
    // This is a list of all themes that this starter is using.
    // To disable a theme, remove it here and run `yarn remove @arshad/gatsby-theme-NAME`.
    `@arshad/gatsby-theme-blog-core`,
    `@arshad/gatsby-theme-page-core`,
    `@arshad/gatsby-theme-phoenix`,
  ],
}
