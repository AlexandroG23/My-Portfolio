import Profile from '../assets/fotos/profile.svg';

export const About = () => {
  return (
    <>
      <div className="pt-10 lg:py-24 xl:pt-48 px-2 dark:bg-zinc-950 bg-lime-100 ">
        <header id='about' className="py-7 grid-xl items-center md:mx-32 lg:mx-4 xl:mx-10 2xl:mx-10">
          
          <div className="2xl:ml-10 2xl:pr-10">
            <h2 className="text-center text-3xl font-poppins font-dia font-noche lg:text-4xl pb-11 tracking-widest">
              Sobre mí
            </h2>

            <p className="style-p-sm md:text-lg xl:text-xl lg:text-lg">
              Resido en Lima - Perú, soy un estudiante de Ing. de Sistemas e Informática, con sólidos conocimientos en lenguajes de
              programación, bases de datos y frameworks.
            </p>
            <p className="style-p-sm md:text-lg xl:text-xl lg:text-lg">
              Mi enfoque se centra en contribuir de manera significativa al
              desarrollo de soluciones tecnológicas tanto en el frontend como en
              el backend.
            </p>
            <p className="style-p-sm md:text-lg xl:text-xl lg:text-lg">
              Apasionado por la innovación y la resolución de problemas, aspiro
              a aplicar mis habilidades en un entorno laboral desafiante y
              colaborativo
            </p>

            {/* Botones */}
          </div>
          <img className="opacity-90 hover:opacity-100 px-5 2xl:mr-64" src={Profile} width={720} alt="Sobre mi" />
        </header>
      </div>
    </>
  );
};
