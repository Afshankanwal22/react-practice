import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Your existing content here */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
