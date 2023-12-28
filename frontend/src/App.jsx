import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Footer />
    </>
  );
}

export default App;
