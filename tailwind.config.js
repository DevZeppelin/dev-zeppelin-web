module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  //es importante activar el PURGE porque esta diciendo que rastree todas las clases que utilizamos y elimine las que no estamos utilizando, si empaquetamos todo en css se vuelve muy pesado y purge nos limpia las clases que utilizamos y nos las empaqueta en nuestro css... solo las que utilizamos, reduce mucho el tamaño
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //aqui extendemos las clases css. agregamos lops colores , spacing, padding, extender las que trae por defecto, etc
      colors: {
        primary: "#00dffc",
        secundary: "#00dffc",
        third: "#343838",
        fourth: "000"
      },
      borderRadius: {
        large: "5rem"
      }
    }
  },
  variants: {},
  plugins: []
};
