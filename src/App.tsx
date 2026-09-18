import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

/**
 * The page shell. Sections get added here one at a time —
 * About, Skills, Projects, Interests, Contact — once the content is real.
 */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        {/* Sections 01–05 land here next. */}
      </main>
      <Footer />
    </>
  );
}
