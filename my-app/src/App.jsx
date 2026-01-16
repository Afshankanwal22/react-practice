import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Home />
      <Section />
      <main className="flex-grow">
        {/* Main content goes here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
