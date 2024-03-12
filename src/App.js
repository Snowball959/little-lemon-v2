import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <head>

    <meta name="description" content="Little Lemon Restaurant"/>
    <meta name="og:description" content="Little Lemon Restaurant"/>
    <meta name="og:image" content="https://little-lemon-restaurant-project.netlify.app/static/media/Logo%20Footer.2c859235d6c57bb54176.png"/>
    <meta name="og:title" content="Little Lemon"/>

    </head>
      <Navbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
