import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

/**
 * The page shell. Sections get added here one at a time —
 * About, Skills, Projects, Interests, Contact — once the content is real.
 */
export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Projects />
      </main>
      <Footer />
    </>
  );
}
