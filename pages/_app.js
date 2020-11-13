import "../styles/index.css";
import Head from "next/head";
//esto es para poder cambiar las cabeceras (titulo, meta)

export default function MyApp({ Component, pageProps }) {
  //exporto por default un componente MyApp que recibe un componente que se va a renderizar y lñas props que recibamos de las funciones copmo getStaticProps o getServerSideProps
  return (
    //esto es un shorten para los fragmentos de react, nos permite agregar varios componentes sin tener que escribir un arreglo o tener un elemento extra
    //SEOO!! en el 2do meta utilizamos las keys porque si reutilizamos las metas sobreescribimos
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">
          Dev Zeppelin - Las webs más rápidas del mundo
        </title>
        <meta key="description" name="description" content="Contactame!" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
