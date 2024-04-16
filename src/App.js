import "./App.css";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { ImageContainer } from "./components/ImageContainer";

function App() {
  return (
    <div className="bg-[#F4E9E9]">
      <Hero />
      <ImageContainer />
      <Footer />
    </div>
  );
}

export default App;
