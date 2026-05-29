import { About } from "./components/About";
import { AmbientMesh } from "./components/AmbientMesh";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { ScrollProgress } from "./components/ScrollProgress";
import { Skills } from "./components/Skills";
import { StoryScroll } from "./components/StoryScroll";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <AmbientMesh />
      <Navbar />
      <main>
        <Hero />
        <StoryScroll />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
