module.exports = {
  //aqui estamos importando los plugins

  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    [
      //aqui configuramos cosas del propio preset
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009"
        },
        stage: 3,
        features: {
          "custom-properties": false
        }
      }
    ]
  ]
};
