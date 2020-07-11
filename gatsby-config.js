require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `Woosung blog.`,
    description: `Gatsby phoenix 테마로 만든 블로그입니다. 정적사이트, 사진에 대한 내용입니다.`,
    siteUrl: process.env.SITE_URL || `https://gatsby-starter-phoenix.vercel.app/`,
    startUrl: `/`,
    copyright: `Â© YYYY Woosung blog. All rights reserved.`,
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
      {
        name: `About`,
        link: `/about`,
      },
    ],
    socialLinks: [
      {
        name: `Github`,
        url: `https://github.com/woosungchoi`,
        icon: `github`,
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
