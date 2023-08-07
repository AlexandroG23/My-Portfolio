import { NavBar } from './components/NavBar';
import { About } from './components/About';
import { Principal } from './components/Principal';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contacto } from './components/Contacto';

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Principal></Principal>

        <About></About>

        <Projects></Projects>
        <Skills></Skills>
        <Contacto></Contacto>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
