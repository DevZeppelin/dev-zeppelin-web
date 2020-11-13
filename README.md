**_NEXT_**:

SSR y SSG (static side generator) e híbrida.

_1ro_. instalar dependencias

next
tailwinds css
postcss-preset-env

//todas estas dependencias son agregadas en el package.json pero pueden ir en las dev dependencies si estamos en un proyecto local

_2do_.luego creamos en raiz una carpeta styles con un index.css:

. en el index.css:

@tailwind base;

(aqui puedo agregar componentes base, por ejemplo

h1: .......
)

@tailwind components;

(aca puedo agregar clases completas y sus estilos)

@tailwind utilities;

_3ro_. luego crear archivo postcss.config.js

module.exports = {
plugins: [
"tailwindcss",
"postcss-flexbugs-fixes",
[
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

_4to_. luego crear tailwindcss.config.js

//Aqui configurariamos todo el tailwind. para mas info meterse a la pagina y leer documentacion

module.exports = {
future: {
removeDeprecatedGapUtilities: true
},
purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],

//**Purge** es importante porque le decimos a tailwind que rastree nuestras clases, ya que sus utilidaddes pueden ser infinitas y si empaquetamos todo eso el CSS se vuelve muy pesado. purge las rastrea, las limpia, las extrae y las empaqueta.

theme: {
extend: {
colors: {
"accent-1": "#333"
},
borderRadius: {
large: "5rem"
}
}
},
variants: {},
plugins: []
};

_5to._ importar el css en nuestro proyecto. El primer archivo es **app.js** donde hago lo q correspoonde a la conf ppal de next.js, ahi impoprto el css y agrego las metas , title y todo lo del seo

_6to_. creamos otro archivo especial de next llamado \_document.js en donde (trik para aumentar el seo) hacer lo que hace el docuemtno default de next.js pero le aprego una prop: para poder ponerle el idioma

//Aveces el servidor se traba y hay que ir al panel de servidor y reinciciarlo

//Aguas con meter archivos en _pages_ porque lo va a ttomar ccomo una página. Los archivos que estan en pagewss y comienzan con \_ es jussttamente para que sean tomados como de configuracion y no les cree una ruta

**7mo**. Creamos la carpeta _componentts_ y ahí por ejemplo creo el archivo welcome.js y aahí en tailwindd blocks copio el códiggo del componentte que quiero y armo mi componente de reactt.

const Welcome = () => ( código de tailblocks );
export default Welcome;

**_OJO_** Como tailwind no está hecho para react debemos cerrar los <input /> y cambiar los class por className

**FORMATTEADAOR** Shift + Alt + F
.........................

# Hello World example

This example shows the most basic idea behind Next. We have 2 pages: `pages/index.js` and `pages/about.js`. The former responds to `/` requests and the latter to `/about`. Using `next/link` you can add hyperlinks between them with universal routing capabilities. The `day` directory shows that you can have subdirectories.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/hello-world)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example hello-world hello-world-app
# or
yarn create next-app --example hello-world hello-world-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
