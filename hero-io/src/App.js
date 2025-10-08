import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Trust from "./components/Trust";
import TrendingApps from "./components/TrendingApps";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
    <Navbar />
    <Banner />
    <Trust />
    <TrendingApps />
    <Footer />

    </div>
  );
}

export default App;
