/**
  Your global data folder is controlled by the dir.data configuration option.
  All *.json and module.exports values from *.js files in this directory will
  be added into a global data object available to all templates.

  This file can be accessed using: {{ site.title }}
*/

module.exports = {
  title: "Bokeh Boyzies | Photoblog",
  logo: "bokehboyzies-logo.jpg",
  url: "https://bokehboyzi.es", // Don't end with a slash /
  description: "Just a couple of pals with a couple of cameras",
  copyright: {
    from: "2018",
    name: "Craig McLachlan & Stewart McKay"
  },
  social_meta: {
    // twitter: "@chrisssycollins",
    instagram: "bokehboyzies",
    featured_image: "/assets/images/featured_image.jpg"
  },
  ENV: process.env.ELEVENTY_ENV
};
