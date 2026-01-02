import { Contact, Experience, HomePage, Navbar, Projects } from "./components";

const App = () => {
  return (
    <main className="font-body">
      <header>
        <Navbar />
      </header>
      <section id="home">
        <HomePage />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default App;
