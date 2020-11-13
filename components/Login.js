const Login = () => (
  <section className="text-gray-700 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className="title-font font-medium text-3xl text-gray-900">
          Páginas web con 100% perfomance.
        </h1>
        <p className="leading-relaxed mt-4">
          Posicioná tu sitio en los mejores lugares de Google. Atraé más tráfico
          a tu web y ganá clientes. Probá tecnologías del futuro. Súper
          velocidad, calidad y SEO como nunca antes existió.
        </p>
      </div>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Iniciá sesión
        </h2>
        <div className="relative mb-4">
          <label for="full-name" class="leading-7 text-sm text-gray-600">
            Nombre Completo
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Login
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Accedé a contenidos exclusivos desde tu cuenta.
        </p>
      </div>
    </div>
  </section>
);

export default Login;
