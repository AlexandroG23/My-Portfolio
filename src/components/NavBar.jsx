import { useEffect, useState } from 'react';

export const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState();

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleScrollToAbout = (event) => {
    event.preventDefault();
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToProject = (event) => {
    event.preventDefault();
    document.getElementById('project').scrollIntoView({ behavior: 'smooth' });
  }

  const handleScrollToSkills = (event) => {
    event.preventDefault();
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (event) => {
    event.preventDefault();
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="dark:bg-zinc-950 bg-lime-100">
      <nav id='home' className="navbar ">
        <h2 className="flex font-alexandro font-extrabold text-4xl dark:text-purple-400">
          Alexandro
        </h2>
        {/* Mavbar desktop and mobile */}
        <ul
          className={`${
            isMenuOpen ? '' : 'hidden'
          } flex menu md:text-lg 2xl:text-xl bg-lime-100 dark:bg-zinc-950`}>
          <li>
            <a className="b-menu dark:text-white dark:hover:text-purple-400" href="#about"
            onClick={handleScrollToAbout}>
              Sobre mí
            </a>
          </li>
          <li >
            <a className="b-menu dark:text-white dark:hover:text-purple-400" href="#project"
            onClick={handleScrollToProject}>
              Proyectos
            </a>
          </li>
          <li >
            <a className="b-menu dark:text-white dark:hover:text-purple-400" href="#Conocimientos"
            onClick={handleScrollToSkills}>
              Habilidades
            </a>
          </li>
          <li >
            <a className="b-menu dark:text-white dark:hover:text-purple-400" href="#contacto" onClick={handleScrollToContact}>
              Contacto
            </a>
          </li>
        </ul>
        {/* DarkMode + Menu */}
        <div className="flex gap-4">
          <button type="button" onClick={handleThemeSwitch} >
            {theme === 'light' ? (
              <i className="bx bx-moon text-purple-700"></i>
            ) : (
              <i className="bx bx-sun dark:text-yellow-500"></i>
            )}
          </button>
          <button type="button" onClick={toggleMenu}>
            {isMenuOpen ? (
              <i className="bx bx-x-circle text-red-600 dark:text-pink-400 sm:hidden"></i>
            ) : (
              <i className="sm:hidden bx bx-menu dark:text-pink-300 text-black"></i>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};
