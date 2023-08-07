import Mensajes from '../assets/fotos/mensajes.svg';
import { useState, useEffect } from 'react';

export const Contacto = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToHome = (event) => {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="py-32 xl:py-64 bg-lime-100 dark:bg-zinc-950">
        <h2
          id="contacto"
          className="text-4xl pb-20 md:pb-32 px-12 tracking-widest text-center font-poppins font-dia font-noche">
          Contáctame
        </h2>
        <section className="sm:mx-20 md:mx-28 lg:mx-0 xl:mx-48 grid lg:grid-cols-2 gap-4 dark:text-cyan-50 font-bold">
          <div className="flex items-center">
            <img
              src={Mensajes}
              alt="Contacto"
              className="sm:mx-10 lg:mx-32 lg:w-[60%] xl:w-[70%] opacity-90 hover:opacity-100"
            />
          </div>
          <div className="text-lg md:text-xl py-10 md:py-10 lg:py-16 xl:py-20 2xl:py-24 mx-10 grid gap-4 md:grid-cols-1 md:mt-0">
            <a className="flex items-center">
              <i className="bx bx-envelope"></i>
              <p className="ml-2">Correo - aa.asenciosg@gmail.com</p>
            </a>
            <a
              href="https://github.com/AlexandroG23"
              className="flex items-center hover:text-purple-600"
              target="_blank"
              rel="noreferrer">
              <i className="bx bxl-github"></i>
              <p className="ml-2">Github - AlexandroG23</p>
            </a>
            <a
              href="https://www.linkedin.com/in/alexandroasenciosgdev"
              className="flex items-center hover:text-blue-500"
              target="_blank"
              rel="noreferrer">
              <i className="bx bxl-linkedin"></i>
              <p className="ml-2">Linkedin - Alexandro Asencios</p>
            </a>
          </div>
        </section>
      </div>

      {showArrow && (
        <div className="animate-bounce text-6xl fixed bottom-0 right-0 mb-4 mr-4 hover:text-blue-500 dark:text-white hover:dark:text-cyan-200">
          <a href="#contacto" onClick={handleScrollToHome}>
            <i className="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      )}
    </>
  );
};
