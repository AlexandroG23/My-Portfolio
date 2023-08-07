import Bootstrap from '../assets/skills/bootstrap.png';
import Css3 from '../assets/skills/css3.png';
import Git from '../assets/skills/git.png';
import Html5 from '../assets/skills/html5.png';
import Javascript from '../assets/skills/javascript.png';
import MySQL from '../assets/skills/mysql.png';
import Tailwind from '../assets/skills/tailwind.png';
import Sass from '../assets/skills/sass.png';
import Github from '../assets/skills/github.png';
import Express from '../assets/skills/express.png';
import Nodejs from '../assets/skills/nodejs.png';
import Python from '../assets/skills/python.png';
import Php from '../assets/skills/php.png';
import Java from '../assets/skills/java.png';

export const Skills = () => {
  return (
    <div id='skills' className="gskills bg-lime-100 dark:bg-zinc-950">
      <h2 className="text-4xl my-5 px-12 tracking-widest text-center font-poppins font-dia font-noche pb-20">
        Mis Habilidades
      </h2>
      <section className='grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-4 p-8'>
        {/* Primer elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Html5} alt="HTML" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>HTML</p>
        </div>

        {/* Segundo elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Css3} alt="CSS" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>CSS</p>
        </div>

        {/* Tercer elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Javascript} alt="JavaScript" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>JavaScript</p>
        </div>

        {/* Cuarto elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Tailwind} alt="Tailwind CSS" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>Tailwind CSS</p>
        </div>

        {/* Quinto elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Sass} alt="SASS" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>Sass</p>
        </div>

        {/* Sexto elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Bootstrap} alt="Bootstrap" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>Bootstrap</p>
        </div>

        {/* Septimo elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Git} alt="Git" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>Git</p>
        </div>

        {/* Octavo elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Github} alt="Github" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>Github</p>
        </div>

        {/* Noveno elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Python} alt="Python" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>Python</p>
        </div>

        {/* Decimo elemento */}

        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Java} alt="Java" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>Java</p>
        </div>

        {/* Onceavo elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Php} alt="PHP" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>PHP</p>
        </div>

        {/* Doceavo elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Nodejs} alt="Node JS" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>Node JS</p>
        </div>

        {/* Treceavo elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={Express} alt="Express JS" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>Express JS</p>
        </div>

        {/* Catorceavo elemento */}
        <div className="flex flex-row gap-8 rounded items-center justify-center w-[150px] md:w-[200px] h-[100px] p-4 bg-white shadow-teal-500 shadow-md hover:-translate-y-2 ease-in duration-200r">
          <img src={MySQL} alt="MySQL" className='w-[50px] h-auto'/>
          <p className='hidden md:flex font-bold w-[30px] md:w-[50px] h-auto'>MySQL</p>
        </div>   

      </section>
    </div>
  );
};
