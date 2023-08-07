import Profile from '../assets/fotos/profile.svg';

export const About = () => {
  return (
    <>
      <div className="pt-10 lg:py-24 xl:pt-48 px-2 dark:bg-zinc-950 bg-lime-100 ">
        <header
          id="about"
          className="py-7 grid-xl items-center md:mx-32 lg:mx-4 xl:mx-10 2xl:mx-10">
          <div className="2xl:ml-10 2xl:pr-10">
            <h2 className="text-center text-3xl font-poppins font-dia font-noche lg:text-4xl pb-11 tracking-widest">
              Sobre mí
            </h2>

            <p className="style-p-sm md:text-lg xl:text-xl lg:text-lg">
              Resido en Lima - Perú, soy un estudiante de Ing. de Sistemas e
              Informática, en busca de oportunidades para desarrollarme en el
              ámbito laboral y profesional.
            </p>
            <p className="style-p-sm md:text-lg xl:text-xl lg:text-lg">
              Me caracterizo por ser una persona perseverante, encontrándome en
              constante y permanente aprendizaje para estar siempre actualizado
              con las últimas novedades, tecnologías y poder añadirle el mayor
              valor posible a mis proyectos.
            </p>
            <p className="style-p-sm md:text-lg xl:text-xl lg:text-lg">
              Mi pasión por el diseño web y la programación me ha llevado a
              enfocarme a crear sitios web únicos y de calidad, con el objetivo
              de brindar una buena experiencia de usuario.
            </p>

            {/* Botones */}
          </div>
          <img
            className="opacity-90 hover:opacity-100 px-5 2xl:mr-64"
            src={Profile}
            width={720}
            alt="Sobre mi"
          />
        </header>
      </div>
    </>
  );
};
