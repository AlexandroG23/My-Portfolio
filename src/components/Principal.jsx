import Perfil from '../assets/fotos/perfil.svg';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Principal = () => {
  const [text] = useTypewriter({
    words: ['', 'Desarrollador Web', 'Programador'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="xl:px-20 lg:py-28 xl:pt-32 2xl:py-40 px-2 dark:bg-zinc-950 bg-lime-100">
      <header className=" py-7 grid-xl items-center md:mx-32 lg:mx-4 xl:mx-10 2xl:mx-10">
        <div className="2xl:ml-10 2xl:pr-10">
          <p className="style-p-sm md:text-lg xl:text-xl lg:text-lg text-center">
            Hola, 🖐. Soy
          </p>
          <h1 className="h1-sm font-poppins font-dia font-noche lg:text-4xl">
            Angelo Alexandro Asencios
          </h1>
          <h2 className="h2-sm dark:text-yellow-200">
            <span className="span-sm font-aw ">{text}</span>
            <Cursor cursorStyle=" | " />
          </h2>

          <p className="style-p-sm md:text-lg xl:text-xl lg:text-lg">
            Apasionado por la tecnología y el desarrollo web, tengo
            conocimientos sólidos en lenguajes de programación, bases de datos y
            frameworks.
          </p>
          <p className="style-p-sm md:text-lg xl:text-xl lg:text-lg">
            Mi enfoque se centra en contribuir de manera significativa al
            desarrollo de soluciones tecnológicas tanto en el frontend como en
            el backend.
          </p>
          <p className="style-p-sm md:text-lg xl:text-xl lg:text-lg">
            Siempre estoy abierto a nuevas oportunidades y colaboraciones, así
            que no dudes en contactarme para futuros proyectos.
          </p>

          {/* Botones */}

          <div className="boton-header justify-evenly sm:px-24 lg:text-lg xl:text-xl ">
            <a
              href="https://github.com/AlexandroG23"
              target="_blank"
              rel="noreferrer"
              className="boton-git 2xl:px-5">
              <i className="bx bxl-github m-auto"></i>
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/alexandroasenciosgdev"
              target="_blank"
              rel="noreferrer"
              className="boton-linkedin 2xl:px-4">
              <i className="bx bxl-linkedin m-auto"></i>
              LinkedIn
            </a>
          </div>
        </div>
        <img
          className="opacity-90 px-10 hover:opacity-100 img-sm 2xl:ml-4 xl:ml-12"
          src={Perfil}
          alt="Perfil"
        />
      </header>
    </div>
  );
};
