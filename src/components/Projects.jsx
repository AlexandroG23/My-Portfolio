import Vimer from '../assets/fotos/vimer.png';
import Etersac from '../assets/fotos/etersac.jpg';
import Movie from '../assets/fotos/movie.png';
import TicTacToe from '../assets/fotos/tictactoe.png';

export const Projects = () => {
  return (
    <div className="dark:bg-zinc-950 py-20 bg-lime-100 xl:px-30 2xl:px-40">
      <h3
        id="project"
        className="text-4xl my-5 px-12 tracking-widest text-center font-poppins font-dia font-noche pb-20">
        Mis ultimos proyectos
      </h3>
      <section className="cards">
        {/* Primer proyecto */}

        <div className="primer-card">
          <img src={Etersac} alt="Etersac" className="img-op"/>
          <h2 className="h2-card-sm">Sistema Web de transportes - Etersac</h2>
          <div className="flex justify-between lg:pt-6 xl:pt-5">
            <div className="label-sm">
              <label className="rounded-lg border-black border-2 p-1 bg-red-500">
                LandBot
              </label>
              <label className="rounded-lg border-black border-2 p-1 bg-blue-400">
                Bootstrap
              </label>
              <label className="rounded-lg border-black border-2 p-1 bg-purple-500">
                PHP
              </label>
            </div>
            <div className="a-sm animate-pulse">
              <a
                href="https://github.com/AlexandroG23/SIstema-Web-Registro-de-colegios"
                target="_blank"
                rel="noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://github.com/AlexandroG23/SIstema-Web-Registro-de-colegios"
                target="_blank"
                rel="noreferrer">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Segundo proyecto */}

        <div className="primer-card">
          <img src={TicTacToe} alt="Tic Tac Toe" className="img-op" />
          <h2 className="h2-card-sm">Tic Tac Toe</h2>
          <div className="flex justify-between">
            <div className="label-sm">
              <label className="rounded-lg border-black border-2 p-1 bg-red-200">
                HTML
              </label>
              <label className="rounded-lg border-black border-2 p-1 bg-blue-200">
                Tailwind CSS
              </label>
              <label className="rounded-lg border-black border-2 p-1 bg-blue-400">
                React JS
              </label>
            </div>
            <div className="a-sm animate-pulse">
              <a
                href="https://github.com/AlexandroG23/tic-tac-toe-game"
                target="_blank"
                rel="noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://alexandrog23.github.io/tic-tac-toe-game/"
                target="_blank"
                rel="noreferrer">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Tercer proyecto */}

        <div className="primer-card">
          <img src={Movie} alt="Movie Search" className="img-op" />
          <h2 className="h2-card-sm">Movie Search</h2>
          <div className="flex justify-between">
            <div className="label-sm">
              <label className="rounded-lg border-black border-2 p-1 bg-red-200">
                HTML
              </label>
              <label className="rounded-lg border-black border-2 p-1 bg-blue-200">
                Tailwind CSS
              </label>
              <label className="rounded-lg border-black border-2 p-1 bg-blue-400">
                React JS
              </label>
            </div>
            <div className="a-sm animate-pulse">
              <a
                href="https://github.com/AlexandroG23/Movie-Search-Engine"
                target="_blank"
                rel="noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://alexandrog23.github.io/Movie-Search-Engine/"
                target="_blank"
                rel="noreferrer">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Cuarto proyecto */}

        <div className="primer-card">
          <img src={Vimer} alt="Vimer Sport" className="img-op" />
          <h2 className="h2-card-sm">Sistema Web de ventas - Vimer Sport</h2>
          <div className="flex justify-between">
            <div className="label-sm">
              
              <label className="rounded-lg border-black border-2 p-1 bg-blue-400">
                Bootstrap
              </label>
              <label className="rounded-lg border-black border-2 p-1 bg-yellow-500 px-3">
                Java
              </label>
              <label className="rounded-lg border-black border-2 p-1 bg-green-500">
                Spring
              </label>
            </div>
            <div className="a-sm animate-pulse">
              <a
                href="https://github.com/AlexandroG23/SpringBoot-Project-VimerSport"
                target="_blank"
                rel="noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://github.com/AlexandroG23/SpringBoot-Project-VimerSport"
                target="_blank"
                rel="noreferrer">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
