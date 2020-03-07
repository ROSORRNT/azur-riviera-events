module.exports = {
  siteMetadata: {
    title: "Azur Riviera Events",
    description:
      "Des événements uniques, personnalisés et à l’image de votre entreprise, selon à vos exigences. La maîtrise de plusieurs compétences concentrées au sein d’une seule et même agence vous offre un service sur-mesure et sans intermédiaires.",
    author: "@johndoe",
    data: ["item1", "item2", "item3"],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
